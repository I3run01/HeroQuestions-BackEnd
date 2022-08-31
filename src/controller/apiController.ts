import e, { Request, Response } from 'express'
import Users from '../Model/Users'


export const ping = (req: Request, res: Response) => {
    res.json({ pong: true })
}

export const findAllUsers = async (req: Request, res: Response) => {
    let users = await Users.find({})
    console.log(users)
    res.json(users)
}

export const createUser =async (req: Request, res: Response) => {
    let user = 'testeUser2'
    let password = 'passwordtest'
    
}