const Joi = require('joi');
const express = require('express');
const app = express();
const sumNumbers = require('./sum');

app.use(express.json());

app.get('/api/hello', (req,res) => {
    res.send("hello from node server");
});

app.post('/api/sum', (req,res)=>{

    const schema = Joi.object({
        numbers: Joi.array().items(Joi.number()).min(1)
    });

    Joi.assert(req.body, schema);

    const numbers = req.body.numbers;
    
    let total = sumNumbers(numbers);
    res.send(`${total}`);
});

const port = process.env.PORT || 3000
const server = app.listen(port, ()=> console.log(`listening on port ${port} ...`));

module.exports = server;