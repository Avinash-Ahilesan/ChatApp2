import express, { NextFunction, Request, Response } from 'express'
import session, { Store } from 'express-session'
import { SESSION_OPTIONS } from './config'
import { active, catchAsync, internalServerError, notFound } from './middleware'
import { currentuser, login, register } from './routes'

export const createApp = (store: Store) => {
    const app = express()

    app.use(express.json())

    app.use(
        session({
            ...SESSION_OPTIONS,
            store 
        })
    )  

    app.use(catchAsync(active))

    app.use(currentuser)
    
    app.use(login)

    app.use(register)
    
    app.use(notFound)

    app.use(internalServerError)
    
    return app
}