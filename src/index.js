import express from 'express';
import cors from 'cors';
import canonize from './canonize';

// function setHeaders() {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.writeHead(200, {'Content-type' : 'text/html'});
// }

const app = express();
app.use(cors());
app.get('/task2b', (req, res) => {
console.log(req.query.fullname);
  const username = canonize(req.query.fullname);
  const answer =  username[0];
  let fullnameSplit =  req.query.fullname.split(' ').length - 1;//.reverse();
  //let lastName = username[0];

  //console.log(`${lastName},|${fullnameSplit},|${answer}`);
  if (fullnameSplit >= 3 || answer === '' || answer.search('[0-9\._\/]') != -1) {
        // setHeaders();
        res.end(`Invalid fullname`);
  } else if (fullnameSplit === 0) {
        // setHeaders();
        const lastName = username[0];
        res.end(`${lastName}`);

  } else if (fullnameSplit === 1) {
        const lastName = username[1];
        const name = username[0];
        const name1Symbol = name.split(``)[0];;
        // setHeaders();
        console.log(`${lastName} | ${name1Symbol}.`);
        res.end(`${lastName} ${name1Symbol}.`);
  } else {
      const lastName = username[2];
      const name = username[0];
      const name1Symbol = name.split(``)[0];
      const middleName = username[1];
      const middleName1Symbol = middleName.split(``)[0];

      // setHeaders();
      console.log(`${lastName} ${name1Symbol}. ${middleName1Symbol}.`);
      res.end(`${lastName} ${name1Symbol}. ${middleName1Symbol}.`);

    }

  // res.json({
  // //  fullname: req.query.fullname,
  //   username,
  //  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
