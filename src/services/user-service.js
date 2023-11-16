
const {userRepository}=require('../repository/index');
const jwt=require('jsonwebtoken');
const bcrypt= require('bcrypt');

class userService{

    constructor(){
        this.user=new userRepository();
    }

    async createServiceUser(data){
        try {
            const user=await this.user.createUser(data);
        return user;
        } catch (error) {
            throw{error:"something went wrong in the service"}
        }
        
    }

    async getOneUserService(id){
        try {
            const user=this.user.getOneUser(id);
        return user;
        
        } catch (error) {
            throw{error:"something went wrong in the service"}
        }
        
    }
    async getUserDeleteService(id){
        try {
            const user=this.user.getUserDelete(id);
        return user;
        
        } catch (error) {
            throw{error:"something went wrong in the service"}
        }
    }

    async getUserUpdateService(id,data){
        try {
            const user=this.user.getUserUpdate(id,data);
        return user;
        
        } catch (error) {
            console.log("something went at controllers");
            throw{error:"something went wrong in the service"}
        }
    }

    async getAllServiceUser(data){
        const user=await this.user.getAllUser(data);
        return user;
    }

    async signInService(email,password){
        const user=await this.user.getByEmail(email);
        const comparePassword=bcrypt.compareSync(password,user.password);

        if(!comparePassword){
            console.log("incorrect password");
            throw {error:"incorrect password"}
        }
        
    }


    async authenticate(token){
           const response=this.verifyToken(token);
           if(!response){
            throw {error:'invalid token'}
           }

           const a=this.user.getById(response.id);
           if(!a){
            console.log("token  is invalid");
           }
           
           

    }

    createToken(data){
        const c=jwt.sign(data,'sssss',{expiresIn:'1d'});
        return c;
    }

    verifyToken(token){
        const userToken=jwt.verify(token,'sssss')
        return userToken;
    }


   
     

    


    
}
module.exports=userService;