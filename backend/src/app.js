const express = require('express')
const app = express()
import router from './routes'
import cors from 'cors'


app.use(cors())
app.use(express.json())
app.use(router)

export default app