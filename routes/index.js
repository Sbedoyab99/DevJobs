import express from 'express'
import { mostrarTrabajos } from '../controllers/homeController.js'
import { nuevaVacante, agregarVacante, mostrarVacante, editarVacante, guardarCambios } from '../controllers/vacantesController.js'

const router = express.Router()

// Routing
// Home
router.get('/', mostrarTrabajos)
// Crear Vacantes
router.get('/vacantes/nueva', nuevaVacante)
router.post('/vacantes/nueva', agregarVacante)
// Editar Vacante
router.get('/vacantes/editar/:url', editarVacante)
router.post('/vacantes/editar/:url', guardarCambios)
// Mostrar Vacante
router.get('/vacantes/:url', mostrarVacante)


export default router
