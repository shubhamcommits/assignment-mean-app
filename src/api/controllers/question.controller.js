const { Ques } = require('../models');
const { sendErr } = require('../../utils');

/*  ======================
 *  -- QUESTION CONTROLLERS --
 *  ======================
 */

// -| Question main controllers |-

const add = async (req, res, next) => {
  try {
    //const questionData = req.body;
    const questionData = new Ques({
        content:req.body.content,
        type: req.body.type,
        options: req.body.options,
        fillIn: req.body.fillIn,
        answer:req.body.answer
    });

    const question = await Ques.create(questionData);

    return res.status(200).json({
      message: 'New Question created!',
      question
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const get = async (req, res, next) => {
  try {
    const questions =  await Ques.find()
    .sort('-created_date')
    .lean();

    return res.status(200).json({
      message: 'All Questions found!',
      questions
      
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

/*  =============
 *  -- EXPORTS --
 *  =============
 */

module.exports = {
  // Question Main controllers
  add,
  get
};
