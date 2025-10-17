import express from "express";
import { personalInfoMiddleWare } from "../ middlewares/personalInfo/personalInfoMiddleWare";
import { updateUserPersonalInfoController } from "../controllers/personalInfo/updateUserPersonalInfo";

const router = express.Router();
router.patch('/:id', personalInfoMiddleWare, updateUserPersonalInfoController);
export default router;