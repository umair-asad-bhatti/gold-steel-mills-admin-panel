const {purchase} = require("../../models/purchase");
const {Op} = require("sequelize");
const ITEMS_PER_PAGE=10;
const purchases=async(req,res)=>{
    try{
        //extract the page number

        const {page}=req.query

        let offset=ITEMS_PER_PAGE*(page-1);
        let total=null;
        let hasMore=false;
        let purchases=[]

        if(!page || page<=0){
            return res.json({error:'provide valid page number'})
        }
        // if(firstName.length===0){

        purchases = await purchase.findAll({
            limit:10,
            offset:offset
        })
        total=await purchase.count()
        // }else{
        //
        //     purchases = await purchase.findAll({
        //         limit:10,
        //         offset:offset,
        //         where:{
        //             firstName:{[Op.iLike]:`%${firstName}%`}
        //         }
        //     })
        //     total=await supplier.count({
        //         where:{
        //             firstName:{[Op.iLike]:`%${firstName}%`}
        //         }
        //     })
        // }

        //check if there is more data to load or not
        hasMore = offset + purchases.length < total;

        return res.json({
            purchases,
            hasMore,
            total
        })
    }catch (e){
        console.log(e)
        return res.json({error:'server error occurred'})
    }
}
module.exports={purchases}