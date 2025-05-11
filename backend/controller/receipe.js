const Receipes=require("../models/receipe.js")
const multer=require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const filename = Date.now() + '-' + file.fieldname
      cb(null, filename)
    }
  })
  
const upload = multer({ storage: storage })

const getReceipes=async (req,res)=>{
    const receipes=await Receipes.find()
    return res.json(receipes);
}
const getReceipe=async (req,res)=>{
    const receipe=await Receipes.findById(req.params.id);
    return res.json(receipes);
}
const addReceipe=async (req,res)=>{
    
    const {title,ingredients,instructions,time}=req.body;
    if(!title||!ingredients||!instructions){
        res.json({message:"Required Feild Cant be empty"})
    }

    const newReceipe=await Receipes.create({
        title,ingredients,instructions,time,coverImage:req.file.filename,
        createdBy:req.user.id
    })

    return res.json(newReceipe)
}
const editReceipe=async (req,res)=>{
    const {title,ingredients,instructions,time}=req.body;
    let receipe=await Receipes.findById(req.params.id);
    try{
        if(receipe){
            await Receipes.findByIdAndUpdate(req.params.id,req.body,{new:true});
            res.json({title,ingredients,instructions,time});
        }
    }
    catch(err){
        return res.status(404).json({message:"error"});
    }
}
const deleteReceipe = async (req, res) => {
    try {
        const deletedReceipe = await Receipes.findByIdAndDelete(req.params.id);
        if (!deletedReceipe) {
            return res.status(404).json({ message: "Receipe not found" });
        }
        return res.status(200).json({ message: "Receipe deleted successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};



module.exports={getReceipes,getReceipe,editReceipe,deleteReceipe,addReceipe,upload}