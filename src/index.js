const express=require('express');
const app=express();
const {PORT}=require('./config/config-env')
const bodyParser=require('body-parser');
const routes=require('./routes/index')
const bcrypt=require('bcrypt')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//const{User}=require('./models/index');


// const {userRepository}=require('./repository/index')
// const User=new userRepository();

//app.use('/api',routes)


app.listen(PORT,()=>{
     
    console.log(`server is listening at ${PORT} `);
})