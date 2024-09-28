'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log(`Press Ctrl+C to quit.`);
});

app.get('/status', (request, response) => {
    const status = {
        "status": "Running"
    };

    response.send(status);
});