import mongoose from 'mongoose'
import { check, validationResult } from 'express-validator'
const Usuario = mongoose.model('Usuario')

const formCrearCuenta = (req, res) => {
  res.render('crear-cuenta', {
    nombrePagina: 'Crear Cuenta',
    tagline: 'Crea tu cuenta en DevJobs'
  })
}

const validarRegistro = async (req, res, next) => {
  // Validamos el fomrulario
  await check('nombre').trim().escape().notEmpty().withMessage('El Nombre es Obligatorio').run(req)
  await check('email').trim().escape().isEmail().withMessage('El formato de Correo no es correcto').run(req)
  await check('password').trim().escape().isLength({ min: 8 }).withMessage('La Contraseña debe contener al menos 8 caracteres').run(req)
  await check('confirmar').trim().escape().equals(req.body.password).withMessage('Las Contraseñas no coinciden. Intentalo de nuevo').run(req)
  const errores = validationResult(req)
  if (!errores.isEmpty()) {
    req.flash('error', errores.array().map(error => error.msg))
    return res.render('crear-cuenta', {
      nombrePagina: 'Crear Cuenta',
      tagline: 'Crea tu cuenta en DevJobs',
      mensajes: req.flash()
    })
  } else {
    next()
  }
}

const crearCuenta = async (req, res, next) => {
  const usuario = new Usuario(req.body)
  try {
    await usuario.save()
    res.redirect('/iniciar-sesion')
  } catch (error) {
    req.flash('error', error)
    res.redirect('/crear-cuenta')
  }
}

export {
  formCrearCuenta,
  crearCuenta,
  validarRegistro
}
