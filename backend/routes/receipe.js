const express=require("express");
const { getReceipes, getReceipe, addReceipe, editReceipe, deleteReceipe, upload } = require("../controller/receipe");
const verifyToken = require("../middleware/auth");
const router=express.Router()


router.get("/",getReceipes)  // Get all receipe
router.get("/:id",getReceipe); // Get Reciepe By id
router.post("/",upload.single('file'),verifyToken,addReceipe);   // Add any Receipe
router.put("/:id",editReceipe);   // Edit Recipe
router.delete("/:id",deleteReceipe); // Delete Receipe

module.exports=router