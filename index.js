require('dotenv').config();
const express = require('express');
const cors = require('cors');

const db = require('./app/models');
const biodata = require('./app/controllers/biodata.controller.js');

const app = express();
const host = process.env.HOST || 'http://localhost';
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: `http://${host}:${port}`
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

async function synchronizeDb() {
    try {
        await db.connect.sync();
        console.log('>> Database synced successfully');
    } catch (err) {
        console.log('>> Failed to sync database : ' + err);
    }
}

synchronizeDb();

app.get('/', (req, res) => {
    console.log('>> Endpoint of biodata findAll');
    biodata.findAll(req, res);
});

app.get('/:id', (req, res) => {
    console.log('>> Endpoint of biodata findOne');
    biodata.findOne(req, res);
});

app.post('/', (req, res) => {
    console.log('>> Endpoint of biodata create');
    biodata.create(req, res);
});

app.put('/:id', (req, res) => {
    console.log('>> Endpoint of biodata update');
    biodata.update(req, res);
});

app.patch('/:id', (req, res) => {
    console.log('>> Endpoint of biodata patch');
    biodata.patch(req, res);
});

app.delete('/:id', (req, res) => {
    console.log('>> Endpoint of biodata delete');
    biodata.delete(req, res);
});

app.listen(port, () => {
    console.log(`>> Server listening on ${host}:${port}`);
});
