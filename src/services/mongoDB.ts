import User from '../Model/users'
import bcrypt from 'bcrypt'

export const createUser = async (email: string, password: string) => {

    const hasUser = await User.findOne({email: email})
    if(!hasUser) {
        const hash = bcrypt.hashSync(password, 10)
        const token = bcrypt.hashSync(String(Math.random()*1000),10)
        let newUser = await User.create({
            email: email,
            password: hash
        })
        await newUser.save()
        return {response: "user has been created", status: true, token: token}
    } return {response: "user already exists", status: false}
}

export const findbyEmail = async (email: string) => {
    return await User.findOne({email: email})

}

export const matchPassword = async (passwordText: string, encrypted: string) => {
    return bcrypt.compareSync(passwordText, encrypted)
}