require('dotenv').config();
require('./alias');

const express = require('express');
const morgan = require('morgan');
const compression= require('compression');
const app = express();
const port = process.env.PORT || 3000;
const clientURL = process.env.CLIENT_URL;

const route = require('./src/routes');
const db = require('./src/config/db');


const cors = require('cors');
const corsOptions ={
    origin: clientURL, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
// init middleware
app.use(morgan('combined'))
app.use(compression())
app.use(cors());
// Add headers before the routes are defined

db.connect();

route(app);


app.listen(port, () => {
  console.log(`App is running at ${clientURL}`);
  console.log(clientURL);
})
