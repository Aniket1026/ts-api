import { Router } from "express";
import { userRegisteration } from "../controllers/user.controller";

const router = Router();
router.post("/register", userRegisteration)

export default router;
