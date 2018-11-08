const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const path = require('path');

const devEnv = require('../../development.config');

// Correct REST naming
/*const {
  authsRoutes,
  groupsRoutes,
  postsRoutes,
  usersRoutes,
  workspacesRoutes
} = require('./routes');*/

const app = express();

// Load 'development' configs for dev environment
if (process.env.NODE_ENV !== 'production') {
  devEnv.init();
}

// Open MOngoose connection to db
require('../db');

// cors middleware for orign and Headers
app.use(cors());

// Set Bodyparser middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Use Morgan middleware for logging every request status on console
app.use(morgan('dev'));

// Set file upload middleware
app.use(fileUpload());
app.use('/uploads', express.static(process.env.FILE_UPLOAD_FOLDER));

// static folder
app.use(express.static(path.join(__dirname, '../../public/dist/public')));

// Routes which should handle request
app.all('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../public/dist/public/index.html'));
});

// Correct REST naming
/*app.use('/api/auths', authsRoutes);
app.use('/api/groups', groupsRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/workspaces', workspacesRoutes);*/

// -->!!!! TO BE REMOVED !!!!
/*app.use('/api/auth', authsRoutes);
app.use('/api/group', groupsRoutes);
app.use('/api/post', postsRoutes);
app.use('/api/user', usersRoutes);
app.use('/api/workspace', workspacesRoutes);*/

// Invalid routes handling middleware
app.use((req, res, next) => {
  const error = new Error('404 not found');
  next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
