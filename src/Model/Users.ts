import { Schema,Model, model, connection } from "mongoose";

type UsersType = {
    email: string
    password: string
}

const schema = new Schema<UsersType>({
    email: {type: String, required: true},
    password: {type: String, required: true},
})

const modelName: string = 'users'
const usersModel = connection && connection.models[modelName] ? (connection.models[modelName] as Model<UsersType>) : model<UsersType>(modelName, schema)

export default usersModel