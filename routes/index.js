import express from 'express'
import { mostrarTrabajos } from '../controllers/homeController.js'
import { nuevaVacante, agregarVacante, mostrarVacante, editarVacante, guardarCambios } from '../controllers/vacantesController.js'
import { formCrearCuenta, crearCuenta, validarRegistro, formLogin, formEditarPerfil, editarPerfil } from '../controllers/usuariosController.js'
import { autenticarUsuario, mostrarPanel, verificarUsuario, cerrarSesion } from '../controllers/authController.js'

const router = express.Router()

// Routing
// Home
router.get('/', mostrarTrabajos)
// Crear Vacantes
router.get('/vacantes/nueva', verificarUsuario, nuevaVacante)
router.post('/vacantes/nueva', verificarUsuario, agregarVacante)
// Editar Vacante
router.get('/vacantes/editar/:url', verificarUsuario, editarVacante)
router.post('/vacantes/editar/:url', verificarUsuario, guardarCambios)
// Mostrar Vacante
router.get('/vacantes/:url', mostrarVacante)

// Crear Cuentas
router.get('/crear-cuenta', formCrearCuenta)
router.post('/crear-cuenta', validarRegistro, crearCuenta)

// Iniciar Sesion
router.get('/iniciar-sesion', formLogin)
router.post('/iniciar-sesion', autenticarUsuario)

// Cerrar Sesion
router.get('/cerrar-sesion', verificarUsuario, cerrarSesion)

// Admin
router.get('/administracion', verificarUsuario, mostrarPanel)
router.get('/editar-perfil', verificarUsuario, formEditarPerfil)
router.post('/editar-perfil', verificarUsuario, editarPerfil)

export default router
