const express = require('express');
const app = express();
const path = require('path')
const port = 3000;
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.json());


app.listen(port, () => { console.log(`listening on port ${port}`) });