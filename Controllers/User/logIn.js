const _ = require("lodash");
const bcrypt = require("bcryptjs");
const joi = require("joi");

const { User } = require("../../Models/User");

exports.logIn = async function(req, res, next) {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Invalid username or password");

  const validPW = await bcrypt.compare(req.body.password, user.password);
  if (!validPW) return res.status(400).send("Invalid username or password");

  const token = await user.generateAuthToken();

  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["firstName", "lastName", "username", "role"]));
};

function validate(req) {
  const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
  });
  return schema.validate(req);
}
