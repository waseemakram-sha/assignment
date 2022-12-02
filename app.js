const { urlencoded } = require('body-parser')
const bodyParser = require('body-parser')
const express = require('express')

const router = require('./routes/router.js')
const app = express()

app.use(express.static('public'))
app.use(express.static('images'))

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended :true}) )

app.use('/',router)

app.listen(2702,()=>{
    console.log("App is listening at port 2702!!!!!!!")
})

