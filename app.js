const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/sudoku.html'));
});


const SERVER_PORT = process.env.PORT || 3000;
app.set('port', SERVER_PORT);

server.listen(app.get('port'), () => {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
