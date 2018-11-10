const init = () => {
    process.env.NODE_ENV = 'development';
    process.env.PORT = '8080';
    process.env.host = `http://localhost:${process.env.PORT}/`;
    process.env.dbURL = 'mongodb://amtica:amtica2018@ds155833.mlab.com:55833/question-answer';
    process.env.FILE_UPLOAD_FOLDER = `${__dirname}/uploads/`;
  };
  
  module.exports = { init };
  