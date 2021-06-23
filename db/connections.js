const mongoose = require('mongoose')

const url = process.env.MONGODB_URL

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})