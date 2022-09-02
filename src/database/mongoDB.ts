import { connect } from "mongoose";

export const mongoConnect = async () => {
    try {
        console.log('Connecting in MongoDB')
        await connect('mongodb+srv://Bruno:1515@teppa-database.m10wqfj.mongodb.net/TeppaDB?retryWrites=true&w=majority')
        console.log('MongoDB is successfully connected')
    } catch(error) {
        console.log('mongoDB connection error:', error)
    }
}