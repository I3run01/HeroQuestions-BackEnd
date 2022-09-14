import { Request, Response } from 'express'
import * as services from '../services/mongoDB'


export const ping = (req: Request, res: Response) => {
    res.json({ pong: true })
}

export const register = async (req: Request, res: Response) => {

    if(req.body.email && req.body.password) {
        let {email, password} = req.body
        
        const response = await services.createUser(email , password)
        return res.json(response)

    }res.json({response: 'E-mail or password not sent', status: false})

}

export const login = async (req: Request, res: Response) => {

    if(req.body.email && req.body.password) {
        let {email, password} = req.body
        const user = await services.findbyEmail(email)
        const matchPassword = await services.matchPassword(password, user?.password)
        
        if(user && matchPassword )return res.json({status: true, token: user.token})
        return res.json({status:false})
        
    }res.json({response: 'E-mail or password not sent', status: false})
    
}

export const tokenValidation = async (req: Request, res: Response) => {

    if(req.body.token) {

        let {token} = req.body
        const user = await services.findbyToken(token)
        if(user && user?.token === token) return res.json({user: user.email, status: true})
    } return res.json({status: false})
}

export const heroQuestions = async (req: Request, res: Response) => {

    if(req.body.token) {
        let {token} = req.body
        let status = await services.sendHeroQuestions(token, {heroName: 'Spider=man'})
        return res.json(status)
    } res.json({status: false})
}