const express=require('express');
const router=express.Router();
const userController=require('../../controlllers/user-controller')

router.post('/user/signUp',userController.createUserController);
router.get('/user/:id',userController.getOneUserController);
router.delete('/user/:id',userController.getOneUserDeleteController);
router.patch('/user/:id',userController.getUserUpdateController)
router.get('/user',userController.getAllUserController);

router.post('/user/signIn',userController.signIn);
module.exports=router
