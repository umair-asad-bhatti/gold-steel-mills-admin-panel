const {Router}=require('express')
const router=Router();

const {store}=require("../controllers/supplier/store")
const {index}=require("../controllers/supplier/index")

router.post("/supplier/store",store)
router.get("/suppliers",index)

module.exports={router}