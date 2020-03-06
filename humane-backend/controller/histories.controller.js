let {getHistories,getHistory,updateHistory} =require("../services/histories.services");
module.exports.histories = async function(req,res){
  try{
    let {body : {startDate,endDate,searchBy,query}} = req;
    let response = await getHistories({startDate,endDate,searchBy,query});
    res.json(response);
  }catch(err){
    console.log(err);
  }
}

module.exports.getHistory = async function(req,res){
  try {
    let {params : {_id}} = req;
    let response = await getHistory({_id});
    res.json(response);
  } catch (error) {
    console.log(error);
  }
}

module.exports.updateHistory = async function(req,res){
  try {
    let {params : {_id},body : {amount,merchant,itemPurchased}} = req;
    console.log(req.params)
    let response = await updateHistory({amount,merchant,itemPurchased,_id});
    console.log(response)
    res.json(response);
  } catch (error) {
    
  }
}