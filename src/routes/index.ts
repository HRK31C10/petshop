import { Router } from 'express'
import { Request, Response } from 'express'

const router = Router()

import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'

router.get("/",pageController.home)

router.get("/cachorros",pageController.cachorros)

router.get("/gatos",pageController.gatos)

router.get("/peixes",pageController.peixes)

router.get('/search',searchController.search)

export default router