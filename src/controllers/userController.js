const UserModel= require('../models/userModel')

const getAllUsers=(req,res)=>{
    //console.log("All Users...")

    UserModel.getAllUsers((err,users)=>{
        if(err) res.send(err);
        //console.log(users)
        res.json({users})
    })

    //res.send("All Users")
}

const getSingleUser=(req,res)=>{
    //console.log("Controller Called")
    let {userid}= req.query;
    console.log(userid)
    UserModel.getByUserId(userid,(err,user)=>{
        if(err) res.send(err);

        //console.log(user)
        res.json(user)
    })

}



const addUser=(req,res)=>{
    console.log("Controller Add Called...");
    let {firstname,lastname,age}=req.body;
    UserModel.addUser(firstname,lastname,age,(err,result)=>{
        if(err) {
            console.log(err)   
            res.send(err)
        }

        
        res.json({success:true})
    })

}

const updateUser=(req,res)=>{

    console.log("Controller Update Called...")

    let {userid,firstname,lastname,age}=req.body;
    //console.log(userid,firstname,lastname,age)
    // console.log(userid,firstname,lastname,age)
    UserModel.updateUser(userid,firstname,lastname,age,(err,result)=>{
        if(err) {
            console.log(err)   
            res.send(err)
        }

        
        res.json({userid,success:true})
    })

}

const deleteUser=(req,res)=>{
    //console.log("Controller Called")
    let {userid}= req.query;
    console.log(userid)
    UserModel.deleteUser(userid,(err,user)=>{
        if(err) res.send(err);

        //console.log(user)
        res.json({success:true})
    })

}

module.exports={getAllUsers,getSingleUser,updateUser,addUser,deleteUser}