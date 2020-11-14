const express = require('express');
const app = express();
const port = 3200;

app.get('/', (req, res) => res.send('CS362 Plant light and temperature measurer server...'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));