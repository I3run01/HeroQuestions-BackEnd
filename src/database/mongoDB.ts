import { connect } from "mongoose";

export const mongoConnect = async () => {
    try {
        console.log('Connecting in MongoDB')
        await connect(process.env.MONGO_URL as string)
        console.log('MongoDB is successfully connected')
    } catch(error) {
        console.log('mongoDB connection error:', error)
    }
}

//mongodb+srv://Bruno:1515@teppa-database.m10wqfj.mongodb.net/TeppaDB?retryWrites=true&w=majority
//mongodb+srv://Bruno:1515@teppa-database.m10wqfj.mongodb.net/?retryWrites=true&w=majority