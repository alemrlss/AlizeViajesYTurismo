import { Router } from 'express'

import { getStops } from '../controllers/stops.controllers.js'

const router = Router()

router.get('/', getStops)


export default router;