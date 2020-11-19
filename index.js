const express = require('express');
const cors = require('cors');
const app = express();
const port = 3200;

// Use cors
app.use(cors());

app.get('/', cors(), (_, res) => {
  res.send({
    message: 'Welcome to the Plant light and temperature measurer API'
  });
});
app.use((_, res) => res.status(404).send({ message: '404, invalid endpoint' }));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));