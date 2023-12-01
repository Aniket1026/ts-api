import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { z } from "zod";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: [6, "Too short name"],
      max: 32,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 32,
    },
    password: {
      type: String,
      required: true,
      min: [6, "Too short password"],
      max: 32,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

export const userSchemaZod = z.object({
  username: z.string().min(6).max(32),
  email: z.string().email(),
  password: z.string().min(6).max(32),
  role: z.enum(["user", "admin"]),
});

export type UserSchema = z.infer<typeof userSchemaZod>;
export const User = mongoose.model("User", userSchema);
