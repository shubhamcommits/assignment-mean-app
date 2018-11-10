const mongoose = require('mongoose');

// const { User, Workspace } = require('./');

const { Schema } = mongoose;

const QuesSchema = new Schema({
  content: {
    type: String,
    default: null
  },
  type: {
    type: String,
    required: true,
    enum:['single', 'multiple', 'fill', 'one_or_more']
  },
  options:[{
    type: String
  }],
  answer: [{
    type: Number,
    required: true
  }],
  fillIn: {
    type: String
  },
  created_date :{
    type:Date,
    default: Date.now(),
    required: true
  }
});

const Ques = mongoose.model('Ques', QuesSchema);

module.exports = Ques;
