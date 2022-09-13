import { Schema,Model, model, connection } from "mongoose";

type UsersType = {
    email: string
    password: string
    token: string
    heroQuestion: {
        heroName:string,
        heroCity: string,
        heroExperience: string,
        heroLocomotion: string,
        heroAbilities: string,
        heroSuperPower: string,
    }
}

const schema = new Schema<UsersType>({
    email: {type: String, required: true},
    password: {type: String, required: true},
    token: {type: String, required: true},
    heroQuestion: {type: Object, required: false}
})

const modelName: string = 'users'
const usersModel = connection && connection.models[modelName] ? (connection.models[modelName] as Model<UsersType>) : model<UsersType>(modelName, schema)

export default usersModel