const Token = require("../models/Token");
var rn = require("random-number");
var gen = rn.generator({
  min: 10000000,
  max: 99999999,
  integer: true,
});

const getRandomId = () => {
  var options = {
    min: -1000,
    max: 1000,
    integer: true,
  };
};

const newToken = async (meter_num, money) => {
  let new_token = {
    token_id: gen(),
    meter_num: meter_num,
    created_at: new Date().toISOString(),
    days: money / 100,
    status: "active",
  };
  const token = new Token(new_token);
  await token.save();

  return { token: token };
};
const getToken = async (token_id) => {
  let token = await Token.findOne({ token_id: token_id });
  return { token };
};

const updateToken = async (token_id) => {
  let token = await Token.findOne({ token_id: token_id });
  if (token) {
    token.status = "used";
    let retur_m = { msg: "updated" };
    return { retur_m };
  }
};

module.exports.newToken = newToken;
module.exports.getToken = getToken;
module.exports.updateToken = updateToken;
