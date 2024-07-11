const {Router}=require('express')
const router=Router();
//suppliers
const {supplierStore}=require("../controllers/supplier/store")
const {suppliers}=require("../controllers/supplier/suppliers")
const {supplierDestroy} = require("../controllers/supplier/destroy");


//purchases
const {purchases}=require("../controllers/purchase/purchases")
const {purchaseStore} = require("../controllers/purchase/create");

//suppliers
router.post("/supplier/store",supplierStore)
router.get("/suppliers",suppliers)
router.delete("/suppliers",supplierDestroy)


//purchases
router.get("/purchases",purchases)
router.post('/purchase/store',purchaseStore)


module.exports={router}