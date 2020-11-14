const express = require('express');
const app = express();
const port = 3200;

app.get('/', (_, res) => res.send('CS362 Plant light and temperature measurer server...'));
app.use((_, res) => res.status(404).send({ message: '404, invalid endpoint' }));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));