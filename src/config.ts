import dotenv from 'dotenv'
import assert from 'assert'

dotenv.config()

export const config = {
    port: process.env.PORT as string,
    apiKey: process.env.apiKey as string,
    authDomain: process.env.authDomain as string,
    projectId: process.env.projectId as string,
    storageBucket: process.env.storageBucket as string,
    messagingSenderId: process.env.messagingSenderId as string,
    appId: process.env.appId as string,
    measurementId: process.env.measurementId as string,
}

