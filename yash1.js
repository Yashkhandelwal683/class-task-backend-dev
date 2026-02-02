const express = require('express');
const app = express();
const port = 3000;

app.get('/attendance', (req, res) => {

    const name = req.query.name || 'Unknown';
    const date = req.query.date || 'Unknown';

    if (!req.query.name || !req.query.date) {
        return res.send('Please provide name and date query parameters');
    }

    if (req.query.present === 'yes') {
        return res.send(`Attendance recorded for ${name} on ${date}`);
    }

    return res.send(`Attendance NOT recorded for ${name} on ${date}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
