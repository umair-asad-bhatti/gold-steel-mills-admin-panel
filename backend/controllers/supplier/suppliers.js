const {supplier} = require("../../models/suppliers");
const {Database} = require("../../database/Database");
const {Op} = require("sequelize");
const ITEMS_PER_PAGE=10;

const suppliers=async (req, res)=>{
  try{
      //extract the page number
      const {page,firstName}=req.query

      let offset=ITEMS_PER_PAGE*(page-1);
      let total=null;
      let hasMore=false;
      let suppliers=[]

      if(!page && !firstName){
          suppliers= await supplier.findAll();
          total=await supplier.count();
          return res.json({
                  suppliers,
                  hasMore,
                  total
              })
      }

      if(!page || page<=0){
          return res.json({error:'provide valid page number'})

      }

      if(firstName.length===0){

          suppliers = await supplier.findAll({
              limit:10,
              offset:offset,
              order:[
                  ['createdAt','DESC']
              ]
          })
          total=await supplier.count()
      }else{

          suppliers = await supplier.findAll({
              limit:10,
              offset:offset,
              order:[
                  ['createdAt','DESC']
              ],
              where:{
                  firstName:{[Op.iLike]:`%${firstName}%`}
              }
          })
          total=await supplier.count({
              where:{
                  firstName:{[Op.iLike]:`%${firstName}%`}
              }
          })
      }

      //check if there is more data to load or not
      hasMore = offset + suppliers.length < total;

      return res.json({
          suppliers,
          hasMore,
          total
      })
  }catch (e){
      console.log(e)
      return res.json({error:'server error occurred'})
  }
}
module.exports={suppliers}