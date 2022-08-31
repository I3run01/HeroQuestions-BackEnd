import { Router } from "express";
import * as apiController from "../controller/apiController";

const router = Router()

router.get('/ping', apiController.ping)
router.get('/register', apiController.register)

export default router