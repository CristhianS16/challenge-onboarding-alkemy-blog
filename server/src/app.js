const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || '4000';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', require('./api/posts'));

app.listen(port, () => {
    console.log('Server on port: ', port);
})