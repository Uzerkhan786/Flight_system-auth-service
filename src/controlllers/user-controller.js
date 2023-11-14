
const bcrypt = require('bcrypt');
const {userService}=require('../services/index');
const User=new userService();
const {SALT}=require('../config/config-env')
const createUserController=async(req,res)=>{
    try {

         const saltRound=bcrypt.genSaltSync(10);
         const pass=bcrypt.hashSync(req.body.password,saltRound);
         
        const user=await User.createServiceUser({
            email:req.body.email,
            password:pass
        });
        return res.json({
            response:user,
            message:"Email and password created successfully",
            error:{}
        })
    } catch (error) {
        
           throw{error}
          
    }
}


const getOneUserController=async(req,res)=>{
    try {
        const user=await User.getOneUserService(req.params.id);
        return res.json({
            response:user,
            message:"Email and password created successfully",
            error:{}
        })
    } catch (error) {
        
           throw{error}
          
    }
}

const getOneUserDeleteController=async(req,res)=>{
    try {
        const user=await User.getUserDeleteService(req.params.id);
        return res.json({
            response:user,
            message:"Email and password created successfully",
            error:{}
        })
    } catch (error) {
        
           throw{error}
          
    }
}


const getUserUpdateController=async(req,res)=>{
    try {
        const user=await User.getUserUpdateService(req.params.id,req.body);
        return res.json({
            response:user,
            message:"Email and password created successfully",
            error:{}
        })
    } catch (error) {
        console.log("something went at controllers");
           throw{error}
          
    }
}

    const getAllUserController=async(req,res)=>{

        try {
            const user=await User.getAllServiceUser();
            return res.json({
                data:user
            })
        } catch (error) {
            throw{error}
        }

    }


module.exports={
    createUserController,
    getAllUserController,
    getOneUserController,
    getUserUpdateController,
    getOneUserDeleteController
}