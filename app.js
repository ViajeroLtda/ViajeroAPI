process.env.CONFIG_DIR = './config'

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/index')); //routes

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;

  res.locals.error = err;

  console.error(err);

  return res.status(err.status || 500).send({
    message: err.message,
    stack: err.stack
  });
});

server = require('http').createServer(app);

const databaseService = require('./services/databaseService');

databaseService.connect(() => {
  const port = process.env.PORT || '3000';
  server.listen(port, () => console.log(`listening on port: ${port}`))
});

module.exports = app;



