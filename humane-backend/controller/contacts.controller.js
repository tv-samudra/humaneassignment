let {getContacts,getFilters} =require("../services/contacts.services")
module.exports.getContacts = async function (req, res) {
  try{
    let {body : {search,name ,selected}} = req;
    let response = await getContacts({search,name,selected});
    res.json(response);
  }catch(err){
    console.log(err);
  }
}

module.exports.getFilters = async function(req,res){
  try{
    let response = await getFilters();
    res.json(response)
  }catch(err){
    console.log(err);
  }
}