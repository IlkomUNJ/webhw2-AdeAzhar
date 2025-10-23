/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.on('/cinema').render('pages/cinema')
router.on('/movies').render('pages/movies')
router.on('/booking').render('pages/booking')
router.on('/seats').render('pages/seats')
