const express = require('express');
const os = require('os');
const router = express.Router()


const app = express();


let sendJSONresponse = function(res, status, content) {
  console.log('hello world')
  res.status(status);
  res.json(content);
};


app.use(express.static('dist'));

app.get('*', function(req, res){
	res.redirect("/")
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

