import e, { Request, Response } from 'express'
import * as services from '../services/mongoDB'


export const ping = (req: Request, res: Response) => {
    res.json({ pong: true })
}

export const register = async (req: Request, res: Response) => {

    
    if(req.body.email && req.body.password) {
        let {email, password} = req.body

        //const response = await services.createUser(email , password)
        //return res.json(response)
        res.json({status:'test'})
    }res.json({response: 'E-mail or password not sent', status: false})
    

}

export const login = async (req: Request, res: Response) => {

    if(req.body.email && req.body.password) {
        let {email, password} = req.body
        const user = await services.findbyEmail(email)
        
        if(user && user.password) return res.json({status: true})
        return res.json({status:false})
    }res.json({response: 'E-mail or password not sent', status: false})
    
}