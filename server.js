const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(__dirname+'/dist/token-management-app'));

app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/token-management-app/index.html'));
});

app.listen(process.env.PORT || 8080)