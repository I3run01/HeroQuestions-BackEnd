import firebase from "../db";
import { Student } from "../models/Students";

const firestore = firebase.fireStore()

const addStudent = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const Student = await firestore.collection('student').doc().set(data)
    }
}