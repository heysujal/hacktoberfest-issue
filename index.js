const express = require('express');
const hacktoberfest = require('hacktoberfest-issue-hunt');
const PORT = process.env.PORT || 3001;
const path = require('path');
let cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
 
options = {
    token: process.env.MY_TOKEN,
    
    labels: 'first-timers-only',
    limit: 10,
    language: 'js',
    // complete: true
};

 
app.get('/issues', (req, res) => {
    hacktoberfest(options)
        .then((issues) => {
            console.log(issues);
            res.json(issues);
        })
        .catch(console.log);

});

app.get('*', (req, res) => {
    res.send('Not available!');

});


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})