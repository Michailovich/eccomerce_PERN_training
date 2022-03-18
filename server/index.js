require('dotenv').config();
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models')
const port = process.env.PORT;
const cors = require('cors')
const router = require('./routes/index')
const fileUpload = require('express-fileupload')
const errorHandler =  require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api',router)
app.use(errorHandler)


const start = async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port,()=>console.log(''))
    }catch(e){
        console.log(e)
    }
}

start();