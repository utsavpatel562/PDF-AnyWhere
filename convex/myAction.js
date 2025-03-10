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
    const apiKey = "YOUR_GOOGLE_STUDIO_API_KEY_HERE"; // YOUR_GOOGLE_STUDIO_API_KEY_HERE

    if (!apiKey) {
      throw new Error("GOOGLE_API_KEY environment variable is not defined");
    }

    console.log("GOOGLE STUDIO API WORKING"); // Debug log

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
    return "Completed"
  },
});

// Search from LangChain

export const search = action({
  args: {
    query: v.string(),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    const vectorStore = new ConvexVectorStore(
      new GoogleGenerativeAIEmbeddings({
        apiKey: process.env.GOOGLE_API_KEY,
        model: "text-embedding-004",
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }), { ctx });

    // Perform similarity search
    const searchResults = await vectorStore.similaritySearch(args.query, 1);
    console.log("Raw search results:", searchResults);

    // Debug metadata filtering
    searchResults.forEach(result => {
      console.log("Search result metadata:", result.metadata);
    });

    // Apply filtering only if needed
    const resultOne = searchResults.filter(q => q.metadata.fileId === args.fileId);
    console.log("Filtered results:", resultOne);

    return resultOne;
  },
});
