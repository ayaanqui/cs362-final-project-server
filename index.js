const express = require('express');
const cors = require('cors');
const app = express();
const port = 3200;

// Use cors
app.use(cors());

const validateTemp = temp => {
  if (temp > 80)
    return "HOT";
  else if (temp < 20)
    return "COLD";
  else
    return "GOOD";
};

const validateHum = hum => {
  if (hum > 500)
    return "HIGH";
  else if (hum < 100)
    return "LOW";
  else
    return "GOOD";
};

const validateLight = light => {
  if (light > 500)
    return "BRIGHT";
  else if (light < 100)
    return "DIM";
  else
    return "GOOD";
};

app.get('/', cors(), (req, res) => {
  const temp = parseFloat(req.query.temp);
  const hum = parseFloat(req.query.hum);
  const light = parseFloat(req.query.light);

  if (temp && hum && light) {
    const ob = {
      temp: validateTemp(temp),
      hum: validateHum(hum),
      light: validateLight(light),
    };
    return res.status(200).send(ob);
  }

  return res.send({
    message: 'Welcome to the Plant light and temperature measurer API'
  });
});
app.use((_, res) => res.status(404).send({ message: '404, invalid endpoint' }));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));