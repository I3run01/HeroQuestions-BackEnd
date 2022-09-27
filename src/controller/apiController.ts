import { Request, Response } from 'express'
import * as services from '../services/mongoDB'

export const ping = (req: Request, res: Response) => {
    res.json({ "pongTest": true })
}

export const register = async (req: Request, res: Response) => {

    if(req.body.email && req.body.password) {
        let {email, password} = req.body
        
        const response = await services.createUser(email , password)
        return res.json(response)

    }res.json({"response": 'E-mail or password not sent', status: false})

}

export const login = async (req: Request, res: Response) => {

    if(req.body.email && req.body.password) {
        let {email, password} = req.body
        const user = await services.findbyEmail(email)
        const matchPassword = await services.matchPassword(password, user?.password)
        
        if(user && matchPassword )return res.json({status: true, token: user.token})
        return res.json({"status":false})
        
    }res.json({"response": 'E-mail or password not sent', status: false})
    
}

export const tokenValidation = async (req: Request, res: Response) => {

    if(req.body.token) {

        let {token} = req.body
        const user = await services.findbyToken(token)
        if(user && user?.token === token) return res.json({"user": user.email, "status": true})
    } return res.json({"status": false})
}

export const heroQuestions = async (req: Request, res: Response) => {

    if(req.body.token) {

        let {token, parameter, value} = req.body

        if(parameter === 'heroName') {
            let status = await services.sendHeroQuestions(token, {heroName: value})
            return res.json(status)
        }
        if(parameter === 'heroCity') {
            let status = await services.sendHeroQuestions(token, {heroCity: value})
            return res.json(status)
        }
        if(parameter === 'heroExperience') {
            let status = await services.sendHeroQuestions(token, {heroExperience: value})
            return res.json(status)
        }
        if(parameter === 'heroLocomotion') {
            let status = await services.sendHeroQuestions(token, {heroLocomotion: value})
            return res.json(status)
        }
        if(parameter === 'heroAbilities') {
            let status = await services.sendHeroQuestions(token, {heroAbilities: value})
            return res.json(status)
        }
        if(parameter === 'heroSuperPower') {
            let status = await services.sendHeroQuestions(token, {heroSuperPower: value})
            return res.json(status)
        }

    } res.json({"status": false})
}

export const getAllHeroAnswer = async( req: Request, res: Response) => {
    if(req.body.token) {
        let { token } = req.body

        let response = await services.getAllHeroAnswer(token)
        
        return res.json(response)
    } res.json({"status": false})
}