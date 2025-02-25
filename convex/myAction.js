"use node";

import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { action } from "./_generated/server.js";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import dotenv from 'dotenv';
import { v } from "convex/values";

// Load environment variables from .env file
dotenv.config();

// Debug log to check if the environment variable is loaded
console.log("Environment Variables:", process.env);

export const ingest = action({
  args: {
    splitText: v.any(),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    // anyone using this code, place your own api key here
    const apiKey = "AIzaSyBtn9VgREivgECAjNo8lKZTSCcNLGaQFx4";

    if (!apiKey) {
      throw new Error("GOOGLE_API_KEY environment variable is not defined");
    }

    console.log("GOOGLE_API_KEY:", apiKey); // Debug log

    await ConvexVectorStore.fromTexts(
      args.splitText,
      args.fileId,
      new GoogleGenerativeAIEmbeddings({
        apiKey: apiKey,
        model: "text-embedding-004",
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }
    );
    return "Completed";
  },
});