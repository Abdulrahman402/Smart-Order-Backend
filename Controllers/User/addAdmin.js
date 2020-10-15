const _ = require("lodash");
const bcrypt = require("bcryptjs");
const joi = require("joi");

const { User } = require("../../Models/User");

exports.addAdmin = async function(req, res, next) {
  const { error } = validateAdmin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).send("User already registered");

  user = new User(
    _.pick(req.body, ["username", "firstName", "lastName", "password", "role"])
  );

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  const token = await user.generateAuthToken();

  await user.save();

  res
    .header("x-auth-token", token)
    .send(_.pick(user, "username", "firstName", "lastName", "role"));
};

function validateAdmin(admin) {
  const schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required(),
    role: joi.string().required()
  });
  return schema.validate(admin);
}
