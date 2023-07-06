import { Router } from 'express'
import { registerUser, loginUser, updateUser, deleteUser, logoutUser, profileUser } from '../controllers/auth.controllers.js'
import { authRequired } from '../middlewares/validateToken.js'

const router = Router()

router.post('/register', registerUser)

router.post('/login', loginUser)

router.put('/update/:id', updateUser)

router.delete('/delete/:id', deleteUser)

router.post('/logout/', logoutUser)

router.get('/profile/', authRequired, profileUser)

export default router;