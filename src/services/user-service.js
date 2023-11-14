const {userRepository}=require('../repository/index');

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
}
module.exports=userService;