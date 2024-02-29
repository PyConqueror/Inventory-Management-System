const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();

require('dotenv').config();
require('./backend/config/database.cjs');

app.use(logger('dev'));
app.use(express.json());

app.use('api/inventory', require('./backend/routes/products.cjs'));

app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Express running on http://localhost/:' + port);
});