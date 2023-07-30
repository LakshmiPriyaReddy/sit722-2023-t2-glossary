var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {

  const dataFilePath = path.join(__dirname, 'data.json');

  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data from JSON file:', err);
      return res.status(500).send('Error reading data from JSON file');
    }

    const jsonData = JSON.parse(data);

  res.render('index', { title: 'SIT722 Devops Glossary',sub:'my website showing a collection of Devops terms and their brief descriptions',
  names: jsonData,});


});
});

module.exports = router;
