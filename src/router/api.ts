import { Router } from "express";
import * as apiController from "../controller/apiController";

const router = Router()

router.get('/ping', apiController.ping)
router.get('/findAllUsers', apiController.findAllUsers)

export default router