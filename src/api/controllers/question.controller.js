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
        answer:req.body.answer
    });

    const question = await Ques.create(questionData);

    return res.status(200).json({
      message: 'New post created!',
      question
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
  add
};
