const StudentModel= require("../../database/models/student.model")

const addNotification = async (req,res,next)=>{
    try{
        const studentEmail=req.body.email;
        const student= await StudentModel.findOne({email: studentEmail});
        student.notification.unshift({message:req.body.message});
        //console.log(student.notification);
        await StudentModel.findOneAndUpdate({email: studentEmail},student);
        res.send("Ok"); 
    }
    catch(e){
        next(e);
    }
}

module.exports = addNotification;