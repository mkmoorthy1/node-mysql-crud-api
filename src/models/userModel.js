var dbConn= require('../../config/dbConfig')

let User=function(user){
    this.userid= user.userid
    this.firstname= user.firstname;
    this.lastname=user.lastname;
    this.age=user.age
}

User.getAllUsers=(result)=>{
    dbConn.query('select userid,firstname,lastname,age from users',(error,res)=>{
        if(error){
            console.log("Error While Fetching Users ",error)
            result(null,error)
        }
        else{
            //console.log("Users Fetched Successfully");
            result(null,res)
        }
    })
}

User.getByUserId=(userid,result)=>{
    dbConn.query('select userid,firstname,lastname,age from users where userid=?',userid,(error,res)=>{
        if(error){
            console.log("Error While Fetching User ",error)
            result(null,error)
        }
        else{
            //console.log("Users Fetched Successfully");
            result(null,res)
        }
    })
}



User.updateUser=(userid,firstname,lastname,age,result)=>{
    dbConn.query('update users set firstname=?,lastname=?,age=? where userid=?',[firstname,lastname,age,userid], (err, res)=>{
        if(err){
            console.log('Error while updating the User');
            result(null, err);
        }else{
            console.log("User updated successfully");
            result(null, res);
        }
        
        
    })
}

User.addUser=(firstname,lastname,age,result)=>{
    dbConn.query('insert into users(firstname,lastname,age) values(?,?,?)',[firstname,lastname,age], (err, res)=>{
        if(err){
            console.log('Error while updating the User');
            result(null, err);
        }else{
            console.log("User Added successfully");
            result(null, res);
        }
        
        
    })
}


User.deleteUser=(userid,result)=>{
    dbConn.query('delete from users where userid=?',userid,(error,res)=>{
        if(error){
            console.log("Error While Deleting User ",error)
            result(null,error)
        }
        else{
            console.log("User Deleted Successfully");
            result(null,res)
        }
    })
}
module.exports=User