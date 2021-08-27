require ('dotenv').config();
const app = require('/bot');
const http= require('http');
const morgan = require('morgan');
app.set('port', process.env.PORT);
app.use(morgan('dev'));
app.use(require('./routes/index'));