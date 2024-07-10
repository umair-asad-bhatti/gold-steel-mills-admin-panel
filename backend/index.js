require('dotenv').config();

const {Database}=require('./database/Database');
const {config}=require("./database/config")
new Database(config);

const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

const app=express();

const {router}=require("./router/router")
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api/v1",router);


const port=process.env.SERVER_PORT||8080;
app.listen(port,function(){
    console.log('server is listening and running on port',port);
})



