import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
mongoose.Promise = global.Promise

const usuariosSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  token: String,
  expira: Date
})

usuariosSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  const hash = await bcrypt.hash(this.password, 12)
  this.password = hash
  next()
})

usuariosSchema.post('save', function (error, doc, next) {
  if (error.name === 'MongoServerError' && error.code === 11000) {
    next('Ese Correo ya esta en uso. Intentalo de nuevo.')
  } else {
    next(error)
  }
})

usuariosSchema.methods = {
  compararPassword: function (password) {
    return bcrypt.compareSync(password, this.password)
  }
}

const Usuario = mongoose.model('Usuario', usuariosSchema)

export default Usuario
