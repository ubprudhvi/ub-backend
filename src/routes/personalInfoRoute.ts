import express from "express";
import { personalInfoMiddleWare } from "../ middlewares/personalInfo/personalInfoMiddleWare";
import { personalInfoController } from "../controllers/personalInfo/personalInfoCOntroller";

const router = express.Router();

router.post('/', personalInfoMiddleWare, personalInfoController);
export default router;