
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

    const signIn=async(req,res)=>{
              const user=await User.signInService(req.body.email,req.body.password);
              return res.json({
                     data:user,
                     message:"sign in successful",
                     error:{}
              })
    }  

    // const accessAuthenticate=async(req,res)=>{
    //    const token=req.headers['x-access-token'];
    //      const user=await User.authenticate();

    //      return res.json({
    //         data:user
    //      })
    // }

    const getByIdController=async(req,res)=>{

       const user=await User.getById(req.body.id,req.body);

       try {
            return res.json({
                data:user
            })
       } catch (error) {
        
       }

    }


    const isAuthen=async(req,res)=>{
        try {
            const token=req.headers['x-access-token'];
            const user=await User.authenticate(token);
            res.json({
                data:user,
                success:true
            })
        } catch (error) {
            res.json({
                data:'error come',
                message:'cannot get header or invalid header'
            })
        }
      
    }
    

    



module.exports={
    createUserController,
    getAllUserController,
    getOneUserController,
    getUserUpdateController,
    getOneUserDeleteController,
    signIn,
    getByIdController,
    isAuthen
}