"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";

import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { TbLoader3 } from "react-icons/tb";
import { useAction, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import uuid4 from "uuid4";
import axios from "axios";

function UploadPdfDialog({ children }) {
  // API Mutations & Actions
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
  const addFileEntry = useMutation(api.fileStorage.AddFileEntryToDB);
  const getFileUrl = useMutation(api.fileStorage.getFileUrl);
  const embeddDocument = useAction(api.myAction.ingest);

  // User Info
  const { user } = useUser();

  // State Variables
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [open, setOpen] = useState(false);

  // Handle File Selection
  const OnFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle File Upload
  const OnUpload = async () => {
    if (!file) {
      alert("Please select a PDF file to upload.");
      return;
    }

    setLoading(true);

    try {
      // 1: Get short-lived upload URL
      const postUrl = await generateUploadUrl();

      // 2: Upload file to Convex storage
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file?.type },
        body: file,
      });

      const { storageId } = await result.json();
      console.log("StorageID:", storageId);

      // 3: Generate File ID & Get File URL
      const fileId = uuid4();
      const fileUrl = await getFileUrl({ storageId });

      // 4: Save file entry in database
      await addFileEntry({
        fileId,
        storageId,
        fileName: fileName.trim() || "Untitled File",
        fileUrl,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });

      console.log("File entry saved successfully!");

      // 5: API Call to Process PDF Data
      const ApiResp = await axios.get(`/api/pdf-loader?pdfUrl=${fileUrl}`);
      console.log("API Response:", ApiResp.data.result);

      // 6: Embedding the document
      const embeddResult = await embeddDocument({
        splitText: ApiResp.data.result,
        fileId:fileId,
      });

      console.log("Embedd Result:", embeddResult);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button className="w-full p-3" onClick={() => setOpen(true)}>
      + Upload PDF File
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Upload PDF File</DialogTitle>
      <DialogDescription asChild>
        <div>
          <h2 className="mt-5">Select a file to upload</h2>
          <div className="gap-2 p-3 rounded-md border">
            <input
              type="file"
              accept="application/pdf"
              onChange={OnFileSelect}
            />
          </div>
          <div className="mt-2">
            <label>File Name *</label>
            <Input
              placeholder="Your file name"
              className="mt-1"
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>
        </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-end">
      <Button
        type="button"
        className="flex items-center bg-neutral-200 text-zinc-500 hover:bg-neutral-200"
        onClick={() => setOpen(false)} // Ensure modal closes
      >
        Close
      </Button>
      <Button className="flex justify-center" onClick={OnUpload} disabled={loading}>
        {loading ? <TbLoader3 className="animate-spin" /> : "Upload"}
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

  );
}

export default UploadPdfDialog;
