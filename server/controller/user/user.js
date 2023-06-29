const expressAsyncHandler=require('express-async-handler');
 

const  User = require('../../modal/register');
// const generateToken=require('../../middlewares/generateToken');


console.log("uppar");

const registerUser = expressAsyncHandler(async(req,res)=>{
   console.log("hello");
       const {firstname,email,password,telephone}=req?.body;
    const userExists=await User.findOne({email});
    if(userExists){

    
        throw new Error('user already exists');
    }
    
    

try{

    const user=await User.create({firstname,email,password,telephone});
    console.log(user);
    res.status(200).json(user);
}
catch(error)
{
    res.json(error);
}
});

//login check;
const loginCredentials=expressAsyncHandler(async(req,res)=>{
const{email,password}=req?.body;
 
const userFound=await User.findOne({email});
console.log(userFound)
console.log(userFound?.id);
//&& (await userFound?.isPasswordMatch(password))

if(userFound && (req?.body?.password == userFound.password))
{
    
   res.json({

    _id:userFound?._id,
    firstname:userFound?.firstname,
    email:userFound?.email,
    password:userFound?.password,
    telephone: userFound?.telephone,
    // token:generateToken(userFound?._id),
   })
}
else
{
 
throw new Error('invalid login credintals');
}


});

module.exports={registerUser,loginCredentials};
//module.exports=fetchUser; 
//module.exports=LoginCredentials ;