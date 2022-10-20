//servidor
import express from 'express'
//variavel de ambiente (PORT)
import dotenv from 'dotenv'
//HTML
import mustache from 'mustache-express'
//path para poder usar a pasta publica
import path from 'path'

import mainRoutes from './routes/index'

dotenv.config()
//criando a variavel server para receber o express
const server = express()

//configurações do mustache
server.set('view engine','mustache')
server.set('views', path.join(__dirname,'views'))
server.engine('mustache',mustache())

server.use(express.static(path.join(__dirname,'../public')))

server.use(mainRoutes)

server.use((req,res) =>{
    res.send("Página não encontrada")
})

server.listen(process.env.PORT)