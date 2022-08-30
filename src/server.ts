import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Endpoint not founded.' });
});

server.listen(process.env.PORT)