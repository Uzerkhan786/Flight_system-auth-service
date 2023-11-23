const express=require('express');
const app=express();
const {PORT}=require('./config/config-env')
const bodyParser=require('body-parser');
const routes=require('./routes/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const db=require('./models/index')
//const{User}=require('./models/index');
// const {userRepository}=require('./repository/index')
// const User=new userRepository();
const {userService}=require('./services/index');
const U=new userService()
app.use('/api',routes)

app.listen(PORT,async(req,res)=>{
     //const a=User.createToken({email:"uzerk@123.com",id:1});
     //db.sequelize.sync({alter:true})
     // const  u1=await db.User.findByPk(1);
     // const r1=await db.Role.findByPk(1);
     // u1.addRole(r1);
     // const b=u1.hasRole(r1);

     // console.log(b);
     console.log(`server is listening at ${PORT} `);
})