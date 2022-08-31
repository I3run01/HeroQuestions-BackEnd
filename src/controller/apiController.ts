import e, { Request, Response } from 'express'
import * as services from '../services/mongoDB'


export const ping = (req: Request, res: Response) => {
    res.json({ pong: true })
}

export const register = async (req: Request, res: Response) => {

    const response = await services.createUser('teste@gmail.com' , 'gshvfghjvscjh')
    res.json({response: response})

}