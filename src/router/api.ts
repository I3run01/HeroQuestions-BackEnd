import { Router } from "express";
import * as apiController from "../controller/apiController";

const router = Router()

router.get('/ping', apiController.ping)
router.post('/register', apiController.register)
router.post('/login', apiController.login)
router.post('/tokenValidation', apiController.tokenValidation)
router.post('/heroQuestions', apiController.heroQuestions)
router.post('/testping', apiController.ping)

export default router