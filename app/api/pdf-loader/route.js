import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";

const pdfUrl="https://adjoining-camel-191.convex.cloud/api/storage/6c5ae850-0a1d-49d3-9ea1-663d891e757a"
export async function GET(req) {
    // step 1 - load the pdf file
    const response = await fetch(pdfUrl);
    const data = await response.blob();
    const loader = new WebPDFLoader(data);
    const docs = await loader.load();

    return NextResponse.json({result: docs})
}