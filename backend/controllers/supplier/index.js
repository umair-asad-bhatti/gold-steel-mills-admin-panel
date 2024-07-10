const {supplier} = require("../../models/suppliers");
const index=async (req,res)=>{

    //check if supplier already exists
    const suppliers=await supplier.findAll();
    res.json([...suppliers])
}
module.exports={index}