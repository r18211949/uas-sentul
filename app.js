const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS sebagai template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route utama
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Ular - Wikipedia Sederhana'
    });
});

// Health check untuk monitoring
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Route untuk testing
app.get('/ping', (req, res) => {
    res.json({ status: 'pong', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
