const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());

app.use(express.static('public'));
app.use(express.json())

const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname)+'/views/index.html');
})


app.listen(port, () => console.log(`Listening on port ${port}`));