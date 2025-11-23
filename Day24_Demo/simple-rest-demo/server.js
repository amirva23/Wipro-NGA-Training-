const express = require('express');
const bodyParser = require('body-parser');

const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
