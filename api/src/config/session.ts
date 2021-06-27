import { SessionOptions } from 'express-session'

import {IN_PROD} from './app'

declare module "express-session" {
  interface Session {
    userId: string;
  }
}

const ONE_HOUR = 1000*60*60
const HALF_HOUR = ONE_HOUR / 2
const FOUR_HOURS = ONE_HOUR * 4
export const {
    SESSION_SECRET = 'secret session',
    SESSION_NAME = 'sid',
    SESSION_IDLE_TIMEOUT = HALF_HOUR,
} = process.env

export const SESSION_ABSOLUTE_TIMEOUT = +(process.env.SESSION_ABSOLUTE_TIMEOUT || FOUR_HOURS)

export const SESSION_OPTIONS: SessionOptions = {
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: {
        maxAge: +SESSION_IDLE_TIMEOUT,
        secure: IN_PROD,
        sameSite: true
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,
}