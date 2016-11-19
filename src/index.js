import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';

let unit = {};
fetch(pcUrl)
  .then(async (res) => {
    unit = await res.json();
  })
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });

const app = express();
app.use(cors());

function notFoundErr(res) {
  res.status(404).send('Not Found');
}

app.get('/', function (req, res) {
  res.json(unit);
});

app.get('/volumes', function (req, res) {
  if (unit.hdd) {
    const volumes = {};
    unit.hdd.map((item) => {
        if (volumes[item.volume]) {
          volumes[item.volume] += item.size;
        }else {
          volumes[item.volume] = item.size;
        }
      });
    console.log(volumes, typeof (volumess), typeof (unit));
    Object.keys(volumes).forEach((key) => {
      volumes[key] += 'B';
    });

    res.json(volumes);

  }else {
    notFoundErr(res);
  }
});

app.get('/:l1', (req, res) => {
  const q = req.params;
  if (unit[q.l1] !== undefined) {
    res.json(unit[q.l1]);
  } else {
    //console.log(p, ' --- ', pc[p.lvl1][p.lvl2]);
    notFoundErr(res);
  }
});

app.get('/:l1/:l2', (req, res) => {
  const q = req.params;
  if (
      q.l2 !== 'length' &&
      unit[q.l1] !== undefined &&
      unit[q.l1][q.l2] !== undefined
  ) {
    //console.log(p, ' --- ', pc[p.lvl1][p.lvl2]);
    res.json(unit[q.l1][q.l2]);
  } else {
    //console.log(p, ' --- ', pc[p.lvl1][p.lvl2]);
    notFoundErr(res);
  }
});

app.get('/:l1/:l2/:l3', (req, res) => {
  const q = req.params;
  if (q.l3 !== 'length' &&
      unit[q.l1] !== undefined &&
      unit[q.l1][q.l2] !== undefined &&
      unit[q.l1][q.l2][q.l3] !== undefined
  ) {
    res.json(unit[q.l1][q.l2][q.l3]);
  } else {
    notFoundErr(res);
  }
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
