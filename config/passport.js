import passport from 'passport'
import LocalStrategy from 'passport-local'
import mongoose from 'mongoose'

const Usuario = mongoose.model('Usuario')
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  const usuario = await Usuario.findOne({ email })
  if (!usuario) {
    return done(null, false, {
      message: 'El Usuario no existe.'
    })
  }
  const verificarPassword = usuario.compararPassword(password)
  if (!verificarPassword) {
    return done(null, false, {
      message: 'La contraseña no es correcta'
    })
  }
  return done(null, usuario)
}))

passport.serializeUser((usuario, done) => done(null, usuario._id))
passport.deserializeUser(async (id, done) => {
  const usuario = await Usuario.findById(id)
  return done(null, usuario)
})

export default passport
