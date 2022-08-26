import {app} from "../db";
import {analytics} from '../db'
import { Student } from "../models/Students";

const firestore = app.firestore()

const addStudent = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const Student = await firestore.collection('student').doc().set(data)
    }
}