const {supplier} = require("../../models/suppliers");
const {purchase} = require("../../models/purchase");
const purchaseStore=async(req,res)=>{
    const {supplierInfo,itemName,price,quantity}=req.body;

    const {firstName,id}=supplierInfo

    await purchase.create({
        supplierName:firstName,
        quantity:quantity,
        price:price,
        total:quantity*price,
        itemName:itemName,
        supplierId:id
    })
    res.status(201).json({message:'purchase has been added successfully'})
}
module.exports={purchaseStore}