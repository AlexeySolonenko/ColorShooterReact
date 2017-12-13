const express = require('express');
const path = require('path');

const app = express();


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/test', (req, res) => {
  //res.json({"test":"hello, this is test"});
  console.log('Test successfull');
});

app.get('/api/color', (req, res) => {
    console.log('api color');
    console.log(req.json());
    console.log(res.json());
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`App listening on ${port}`);