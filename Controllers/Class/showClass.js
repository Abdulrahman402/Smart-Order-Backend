const { Class } = require("../../Models/Class");

exports.showClass = async function(req, res, next) {
  const clas = await Class.find({ englishName: req.params.englishName })
    .select("-_id")
    .populate("meals", "-class -_id");

  console.log(req.params.englishName);

  res.send(clas);
};
