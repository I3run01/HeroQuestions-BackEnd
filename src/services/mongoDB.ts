import User from '../Model/users'
import bcrypt from 'bcrypt'

type heroQuestions = {
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
            token: token,
            heroQuestions: {
                heroName: null,
                heroCity: null,
                heroExperience: null,
                heroLocomotion: null,
                heroAbilities: null,
                heroSuperPower: null,
            },
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

export const sendHeroQuestions = async (token: string, heroQuestions?: heroQuestions) => {

    
    let user = await User.findOne({token: token})
    if(user && heroQuestions?.heroName) {
        await User.updateOne(
            {token: token},
            {
                $set: {
                    'heroQuestions.heroName': heroQuestions.heroName
                }
            },
        )
        return {status: true}
    }
    if(user && heroQuestions?.heroCity) {
        await User.updateOne(
            {token: token},
            {
                $set: {
                    'heroQuestions.heroCity': heroQuestions.heroCity
                }
            },
        )
        return {status: true}
    }
    if(user && heroQuestions?.heroExperience) {
        await User.updateOne(
            {token: token},
            {
                $set: {
                    'heroQuestions.heroExperience': heroQuestions.heroExperience
                }
            },
        )
        return {status: true}
    }
    if(user && heroQuestions?.heroLocomotion) {
        await User.updateOne(
            {token: token},
            {
                $set: {
                    'heroQuestions.heroLocomotion': heroQuestions.heroLocomotion
                }
            },
        )
        return {status: true}
    }
    if(user && heroQuestions?.heroAbilities) {
        await User.updateOne(
            {token: token},
            {
                $set: {
                    'heroQuestions.heroAbilities': heroQuestions.heroAbilities
                }
            },
        )
        return {status: true}
    }
    if(user && heroQuestions?.heroSuperPower) {
        await User.updateOne(
            {token: token},
            {
                $set: {
                    'heroQuestions.heroSuperPower': heroQuestions.heroSuperPower
                }
            },
        )
        return {status: true}
    }
    return {response: 'No user user has been found', status: false}
}