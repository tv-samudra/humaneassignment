let History = require("../models/History");
const { Types: { ObjectId } } = require("mongoose");
module.exports.getHistories = async function ({ startDate, endDate, searchBy, query }) {
  startDate = new Date(startDate).setHours(0, 0, 0);
  endDate = new Date(endDate).setHours(23, 59, 999);

  let condition = {
    $match: {
      createdDate: {
        $gte: startDate,
        $lte: endDate
      }
    }
  }

  if (searchBy == "transactionId") {
    condition["$match"]["_id"] = ObjectId(query.trim());
  } else if (searchBy == "merchantId") {
    condition["$match"]["merchant"] = query;
  }

  let data = await History.aggregate([
    condition
    ,
    {
      $project: {
        createdDate: 0,
        merchantId: 0,
        __v: 0
      }
    }
  ]);

  if (data.length) {
    /**format data as client requirement */
    data = data.map(field => Object.values(field));
    return { data }
  }
}

module.exports.getHistory = async function ({ _id }) {
  let response = await History.findOne({ _id: ObjectId(_id) });
  return response;
}

module.exports.updateHistory = async function ({ amount, merchant, itemPurchased, _id }) {
  console.log({ amount, merchant, itemPurchased, _id })
  let updated = await History.findOneAndUpdate({ _id: _id }, {
    $set: {
      itemPurchased, amount, merchant
    }
  }, { new: true });
  return updated;
}