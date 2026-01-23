export const Userupdate = async (req ,res,next)=>{
    try {
        
        const {fullname , email, mobilenumber} =req.body;
        const currentUser = req.user;

        if(fullname||email||mobilenumber)
        {
            const error = new Error("All field required");
        error.StatusCode = 401;
         return next(error);
    }
        

        console.log (currentUser);
        
        currentUser.fullname=fullname;
        currentUser.email=email;
        currentUser.mobilenumber=mobilenumber;
        await currentUser.save();


        


        console.log("NewData:",currentUser)
        res.Status(200).json({message:"user updatefully", data : currentUser});


    } catch (error) {
        next(error);
        
    }
}