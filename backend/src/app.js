const express = require('express')
const app = express()
import router from './routes'

app.use(express.json())
app.use(router)

export default app