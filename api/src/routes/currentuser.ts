import { Router } from 'express'
import { auth, catchAsync } from '../middleware'
import { User } from '../models'

const router = Router()

router.get('/currentuser', async (req, res) => {
    const user = await User.findById(req.session!.userId)
    res.json(user)
})

export default router