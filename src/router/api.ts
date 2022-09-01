import { Router } from "express";
import * as apiController from "../controller/apiController";

const router = Router()

router.get('/ping', apiController.ping)
router.post('/register', apiController.register)
router.post('/login', apiController.login)

export default router