import mongoose from 'mongoose'
import './config/db.js'
import express from 'express'
import exphbs from 'express-handlebars'
import router from './routes/index.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import helpers from './helpers/handlebars.js'

const app = express()
dotenv.config({ path: '.env' })

// Habilitar Handlebars como Template Engine
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs.engine({
  defaultLayout: 'layout',
  helpers
}))

// Static files
app.use(express.static('public'))

app.use('/', router)
app.use(cookieParser())
app.use(session({
  secret: process.env.SECRETO,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE,
    dbName: 'devjobs'
  })
}))

// Definir puerto y arrancar proyecto
const port = process.env.PORT
app.listen(port, () => {
  console.log(`El servidor se esta ejecutando en (http://localhost:${port})`)
})