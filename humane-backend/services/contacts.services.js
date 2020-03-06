let Contacts = require("../models/Contacts");

module.exports.getContacts = async function ({ search ,name,selected}) {
  let condition = {};

  if(name){
    condition[name] = { $in :selected}
  }

  if (search) {
    search = new RegExp(search, "gi");
    condition = { $or: [{ title: search }, { address: search }, { name: search }] }
  }
  console.log(condition)

  let data = await Contacts.find(condition);
  if (data.length) {
    return { data }
  }
}

module.exports.getFilters = async function () {
  let filters = await Contacts.aggregate([{
    $group: {
      _id: "$id",
      industry: {
        $addToSet: "$industry"
      },
      company: {
        $addToSet: "$company"
      },
      name: {
        $addToSet: "$name"
      }

    }
  }]);

  return {filters : filters[0]}
}