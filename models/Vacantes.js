import mongoose from 'mongoose'
import slug from 'slug'
// import shortid from 'shortid'
import { nanoid } from 'nanoid'
mongoose.Promise = global.Promise

const vacantesSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: 'El nombre de la vacante es obligatorio.',
    trim: true
  },
  empresa: {
    type: String,
    trim: true
  },
  ubicacion: {
    type: String,
    trim: true,
    required: 'La ubicacion es obligatoria.'
  },
  salario: {
    type: String,
    default: 0,
    trim: true
  },
  contrato: {
    type: String,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    lowercase: true
  },
  skills: [String],
  candidatos: [{
    nombre: String,
    email: String,
    cv: String
  }],
  autor: {
    type: mongoose.Schema.ObjectId,
    ref: 'Usuarios',
    required: 'El autor es obligatorio'
  }
})
vacantesSchema.pre('save', function (next) {
  const url = slug(this.titulo)
  this.url = `${url}-${nanoid()}`
  next()
})

const Vacante = mongoose.model('Vacante', vacantesSchema)

export default Vacante
