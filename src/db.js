const mongoose = require('mongoose');

// Get Mongoose to use global promise library to avoid error messages
mongoose.Promise = global.Promise;

// Connect mongoose to db
const dbURL = process.env.dbURL || 'mongodb://shubham3597:shubham3597#@ds155833.mlab.com:55833/question-answer';
mongoose.connect(dbURL,  { useNewUrlParser: true });

// Log Mongoose connection status changes:
mongoose.connection.on('connected',  () => {
  // eslint-disable-next-line no-console
  console.log(`🗄  Mongoose connection is open on\n\t${dbURL}`);
});

mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log(`Mongoose connection had an error:\n${err}`);
});

mongoose.connection.on('disconnected', () => {
  // eslint-disable-next-line no-console
  console.log('Mongoose disconnected.');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    // eslint-disable-next-line no-console
    console.log('Mongoose disconnected due to app termination processs.');
    process.exit(0);
  });
});
