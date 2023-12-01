import { Request, Response } from "express";
import ResponseMessage from "../interfaces/ResponseMessage";
import { User, UserSchema, userSchemaZod } from "../models/user.model";

export const userRegisteration = async (
  req: Request<UserSchema>,
  res: Response<ResponseMessage>
) => {
  try {
    const user: UserSchema = userSchemaZod.parse(req.body);
    if (await User.exists({ username: user.username }) || await User.exists({ email: user.email })) {
         return res.status(400).json({
            success: false,
            message: "Username already exists",
         });
    }
    
    const newUser = new User(user);
    await newUser.save();
     
    return res
      .status(201)
      .json({ success: true, message: "User created successfully", user });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in user signup" + (error as Error).message,
    });
  }
};
