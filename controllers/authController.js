import mongoose from 'mongoose'
import passport from 'passport'
const Vacante = mongoose.model('Vacante')

const autenticarUsuario = passport.authenticate('local', {
  successRedirect: '/administracion',
  failureRedirect: '/iniciar-sesion',
  failureFlash: true,
  badRequestMessage: 'Ambos campos son obligatorios.'
})

const mostrarPanel = async (req, res) => {
  const vacantes = await Vacante.find({ autor: req.user._id }).lean()
  res.render('admin', {
    nombrePagina: 'Panel de Administración',
    tagline: 'Crea y Administra tus Vacantes',
    vacantes,
    cerrarSesion: true,
    nombre: req.user.nombre
  })
}

const verificarUsuario = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/iniciar-sesion')
}

const cerrarSesion = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
  })
  return res.redirect('/iniciar-sesion')
}

export {
  autenticarUsuario,
  mostrarPanel,
  verificarUsuario,
  cerrarSesion
}
