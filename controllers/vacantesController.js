import mongoose from 'mongoose'
const Vacante = mongoose.model('Vacante')

const nuevaVacante = (req, res) => {
  res.render('nueva-vacante', {
    nombrePagina: 'Nueva Vacante',
    tagline: 'LLena el formulario y publica tu vacante'
  })
}

const agregarVacante = async (req, res) => {
  const vacante = new Vacante(req.body)
  vacante.skills = req.body.skills.split(',')
  const nuevaVacante = await vacante.save()
  res.redirect(`/vacantes/${nuevaVacante.url}`)
}

const mostrarVacante = async (req, res, next) => {
  const { url } = req.params
  const vacante = await Vacante.findOne({ url }).lean()
  if (!vacante) {
    return next()
  }
  res.render('vacante', {
    vacante,
    nombrePagina: vacante.titulo,
    barra: true
  })
}

const editarVacante = async (req, res, next) => {
  const { url } = req.params
  const vacante = await Vacante.findOne({ url }).lean()
  if (!vacante) {
    return next()
  }
  res.render('editar-vacante', {
    vacante,
    nombrePagina: `Editar - ${vacante.titulo}`
  })
}

const guardarCambios = async (req, res, next) => {
  const { url } = req.params
  const vacanteActualizada = req.body
  vacanteActualizada.skills = req.body.skills.split(',')
  const vacante = await Vacante.findOneAndUpdate({ url }, vacanteActualizada, {
    new: true,
    runValidators: true
  })
  res.redirect(`/vacantes/${vacante.url}`)
}

export {
  nuevaVacante,
  agregarVacante,
  mostrarVacante,
  editarVacante,
  guardarCambios
}
