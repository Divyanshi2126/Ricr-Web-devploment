export const Userupdate = async (req ,res,next)=>{
    try {
        
        const {fullName , email, mobileNumber} =req.body;
        const currentUser = req.user;

        if(fullName||email||mobileNumber)
        {
            const error = new Error("All field required");
        error.StatusCode = 400;
         return next(error);
    }
        

        console.log (currentUser);
        
        currentUser.fullName=fullName;
        currentUser.email=email;
        currentUser.mobilenumber=mobileNumber;
        await currentUser.save();


        


        console.log("NewData:",currentUser)
        res.Status(200).json({message:"user updatefully", data : currentUser});


    } catch (error) {
        next(error);
        
    }
}