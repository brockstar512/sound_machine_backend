const express = require('express')
const PORT = process.env.PORT || 5000
const parser = require('body-parser')
const cors = require('cors')
const router = express.Router()


const app = express()

// const routerVar = require('./routes/router_file')

app.get('/', (req,res)=>{
    res.send('sound of silence')
})


app.use(parser.json())
app.use(cors())


app.listen(PORT, () => console.log('Server running on port:', PORT))