const {purchase} = require("../../models/purchase");
const purchases=async(req,res)=>{
    try {
        //check if supplier already exists
        const AllPurchases=await purchase.findAll();
        res.json([...AllPurchases])
    }catch (e){
        console.log('error occurred in purchases get request',e)
    }
}
module.exports={purchases}