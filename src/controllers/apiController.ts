import e, { Request, Response } from 'express';
import { rmSync } from 'fs';
import * as UserService from '../services/UserService'

export const register = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let { email, password } = req.body;

        const newUser = await UserService.createUser(email, password)

        if(newUser instanceof Error) {
            return res.json({error: newUser.message})
        } else {
            res.status(201)
            return res.json( { id: newUser.id})
        }
    }

    else return res.json({ error: 'E-mail e/ou senha não enviados.' });
}

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        const user = await UserService.findByEmail(email)

        if (user && UserService.matchPassword(password, user.password)) {
            return res.json({ status: true });
        }
    }

    res.json({ status: false });
}

