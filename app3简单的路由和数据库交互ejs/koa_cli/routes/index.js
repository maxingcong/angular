var router = require('koa-router')();
var path = require('path');
var fs = require('fs');
// const {promisify} = require('util')
// const readFileIfy = promisify(fs.readFile)

router.get('/', function* (next) {
  const data = proReadFile('./package.json')
  console.log(1,data.next(),data.next(),data.next())
  this.body = data.next()
});

router.get('/foo', function* (next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

// fs.readFile('./package.json', cd);

// function cd(err, res) {
//   console.log(err,res.toString());
// }

function *proReadFile(path) {
  yield 'hole';
  yield 'word';
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

module.exports = router;
