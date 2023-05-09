const express = require('express');

const app = express();

app.get("/", (request, response)=> {
    return response.json({message: "fundamentos node js"})
});

app.listen(3003);