const express = require('express');
const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('app listening on port 3000')); 

