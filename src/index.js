import express from 'express';
import cors from 'cors';
import regforuname from './regforuname';

const app = express();
app.use(cors());
app.get('/task2c', (req, res) => {
  console.log(`${req.query.username}`);
  const usname =  regforuname(req.query.username);
  const buff = req.query.username;
  if (buff.search('[\._\/]') === -1) {
    const buffout = buff.match(/[a-zA-Z0-9]+/);
    console.log(`buffout = ${buffout}`);
    res.end(`@${buffout}`);
  } else {
    const test = buff.match(/\/\/*([^\/]*\/)?@?([a-zA-Z0-9._]*)/);
    const lenUsername = test.length - 1;
    console.log(`${usname} - ${test} - ${lenUsername}`);
    res.end(`@${test[lenUsername]}`);
  }
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
