import express from 'express';
import cors from 'cors';
import canonize from './canonize';
import ucfirst from './ucfirst';

const app = express();
app.use(cors());
app.get('/task2b', (req, res) => {
  console.log(req.query.fullname);
  const username = canonize(req.query.fullname);
  const answer =  req.query.fullname;
  const lenUsername = username.length - 1;
  console.log(`-${answer}-|${username[0]}|\/${lenUsername}}`);
  if (lenUsername > 2 || answer === '' || answer.search('[0-9\._\/]') != -1) {
    res.end(`Invalid fullname`);
  } else if (lenUsername === 0) {
    const lastName = ucfirst(username[0]);
    res.end(`${lastName}`);

  } else if (lenUsername === 1) {
    const lastName = ucfirst(username[1]);
    const name = username[0];
    const name1Symbol = name.split(``)[0].toUpperCase();
    console.log(`${lastName} | ${name1Symbol}.`);
    res.end(`${lastName} ${name1Symbol}.`);
  } else {
    const lastName = ucfirst(username[2]);
    const name = username[0];
    const name1Symbol = name.split(``)[0].toUpperCase();
    const middleName = username[1];
    const middleName1Symbol = middleName.split(``)[0].toUpperCase();
    console.log(`${lastName} ${name1Symbol}. ${middleName1Symbol}.`);
    res.end(`${lastName} ${name1Symbol}. ${middleName1Symbol}.`);
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
