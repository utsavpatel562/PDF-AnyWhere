import { v } from "convex/values";
import { mutation } from "./_generated/server";

export default createUser = mutation ({
    args: {
        email : v.string(),
        userName: v.string(),
        imageUrl: v.string(),
    },
    handler: async(ctx, args) => {
        // if user already exists, return user
        const user = await ctx.db.query('users').filter((q)=>q.eq(q.field('email'),args.email)).collect();

        // if user does not exist, create user and return user
    }
})