import express from "express";
import { savehtml, sendemail } from "../controllers/noticeController.js";
export const noticeRouter=express.Router()

noticeRouter.post('/savehtml',savehtml)
noticeRouter.post('/sendemail',sendemail)