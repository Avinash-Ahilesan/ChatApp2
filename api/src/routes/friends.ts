import { Router } from 'express'
import { auth } from '../middleware'
import { User } from '../models/user'

const router = Router()

router.get('/friends', auth, (req, res) => {
    const user = User.findById(req.session!.userId)
})
router.post('/friends/add')

router.delete('/friends/requests')




