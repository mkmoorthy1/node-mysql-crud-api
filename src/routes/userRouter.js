const express= require('express')
const router= express.Router();

const userController= require('../controllers/userController')

router.get("/",userController.getAllUsers)
router.get("/singleuser",userController.getSingleUser)
router.post("/addUser",userController.addUser)
router.put("/updateUser",userController.updateUser)
router.delete("/deleteUser",userController.deleteUser)


module.exports= router;