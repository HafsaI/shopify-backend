const request = require('request');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: '*'
}));
let apikey = '7f8536db6566227adeed7245f59a5f53';
let pass = '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';
let endpoint = 'products';
// let options = { 
//     'method': 'GET',
//     'url': `https://${apikey}:${pass}@bundlezone.myshopify.com/admin/api/2022-07/products.json`,
//     'headers': {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin' : '*'
//     }
// };
const options = {
    url: `https://${apikey}:${pass}@bundlezone.myshopify.com/admin/api/2022-07/products.json`
};

app.get("/getdata", (req, resp)=>{
    request (options, function (error, response) {
    if (error) throw new Error(error);
    resp.send(response.body);
    console.log('found');
    });
    });


app.listen(5000)