import { Router } from 'express'
import { logIn } from '../auth'
import { guest, catchAsync } from '../middleware'
import { User } from '../models'
import { BadRequest } from '../errors'
import { registerSchema, validate } from '../validation'

const router = Router()

router.post('/register', guest, catchAsync(async (req, res) => {
    await validate(registerSchema, req.body)

    const { email, name, password } = req.body

    const found = await User.exists({ email })

    if (found) {
        throw new BadRequest('Invalid Email')
    }

    const user = await User.create({
        email,
        name,
        password
    })

    logIn(req, user.id)

    console.log(req.body)
    res.json({ message: 'OK'})
}))

export default router