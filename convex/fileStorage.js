// code by utsav patel
import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const AddFileEntryToDB = mutation({
  args: {
    fileId: v.string(),
    storageId: v.string(),
    fileName: v.string(),
    createdBy: v.string(),
  },
  handler: async(ctx, args) => {
    const result = await ctx.db.insert('pdfFiles', {
      fileId: args.fileId,
      fileName: args.fileName,
      storageId: args.storageId,
      createdBy: args.createdBy,
    })
    return 'Inserted'
  }
})