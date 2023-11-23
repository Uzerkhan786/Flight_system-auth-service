const { where } = require('sequelize');
const {User,Role}=require('../models/index');
const bcrypt=require('bcrypt');

class userRepository{

    async createUser(data){
        try {
            
            const user=await User.create(data);
        return user
        } catch (error) {
            throw{error:"sonething went in the repository"}
        }
    }
    async getOneUser(id){
        try {
            const user=await User.findByPk(id,{
                  attributes:['email','id']
            });
            return user
        } catch (error) {
            throw{error};
        }
    }

    async getUserDelete(userId){
        try {
            const user=await User.destroy({
                where:{
                    id:userId
                }
            });
           return user
        } catch (error) {
            throw{error}
        }
    }

    async getUserUpdate(id,data){
        try {
        //     const user=await User.update(data,{
        //         where:{
        //             id:data.id
        //         }
        //     });
        //    return user


        const user=await User.findByPk(id);
        user.password=data.password;
        await user.save();
        return user;
        } catch (error) {
            console.log("something went at controllers");
            throw {error}
        }
    }
    async getAllUser(){
        const user=await User.findAll();
        return user

    }


    async checkPassword(plainPassword,hashPassword){
        const check=await bcrypt.compareSync(plainPassword,hashPassword);
        return check;
    }

    async getByEmail(email){
        const e=await User.findOne({
            where:{
                email:email
            }
        })
        return e;
    }

    async getById(id){
        const e=await User.findOne({
            where:{
                id:id
            }
        })
        return e;
    }


    async getUserId(userId,N){

        const user=await User.findByPk(userId);
        const role=await Role.findOne({
               where:{
                name:N.name
               }
        })

        return user.hasRole(role);
    }
    

    
}

module.exports=userRepository;
