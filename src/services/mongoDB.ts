import User from '../Model/users'
import bcrypt from 'bcrypt'

type heroQuestion = {
    heroName?:string,
    heroCity?: string,
    heroExperience?: string,
    heroLocomotion?: string,
    heroAbilities?: string,
    heroSuperPower?: string,
}

export const createUser = async (email: string, password: string) => {

    const hasUser = await User.findOne({email: email})
    if(!hasUser) {
        const hash = bcrypt.hashSync(password, 10)
        const token = bcrypt.hashSync(email+String(Math.random()), 10)
        let newUser = await User.create({
            email: email,
            password: hash,
            token: token
        })
        await newUser.save()
        return {response: "user has been created", status: true, token: token}
    } return {response: "user already exists", status: false}
}

export const findbyEmail = async (email: string) => {
    return await User.findOne({email: email})
}

export const findbyToken = async (token: string) => {
    return await User.findOne({token: token})
}

export const matchPassword = async (passwordText?: string, encrypted?: string) => {
    if(passwordText && encrypted) return bcrypt.compareSync(passwordText, encrypted)
    return false
}

export const sendHeroQuestions = (heroQuestions: heroQuestion, email: string) => {
    
}
