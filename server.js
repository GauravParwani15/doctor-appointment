const express = require('express');

const app = express();

const port = process.env.port || 5000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});