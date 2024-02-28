const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();

require('dotenv').config();
require('./config/database.cjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Express running on http://localhost/:' + port);
});