const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

const dbPath = path.join(__dirname, 'dbhome.json'); // Update path to dbhome.json
const router = jsonServer.router(dbPath);

// Use JSON Server router for default routes
app.use('/api', router);

// Define custom routes if needed
app.get('/api/user', (req, res) => {
    res.json({ message: 'User endpoint' });
});

app.get('/api/userdetails', (req, res) => {
    res.json({ message: 'User details endpoint' });
});

app.get('/api/mens', (req, res) => {
    const { limit } = req.query;
    const data = require(dbPath);
    const mensData = data.mens.slice(0, limit ? parseInt(limit) : 12);
    res.json(mensData);
});

app.get('/api/all', (req, res) => {
    const { item_id } = req.query;
    const data = require(dbPath);

    if (item_id) {
        const product = data.all.find(item => item.item_id === parseInt(item_id));
        res.json(product ? [product] : []);
    } else {
        res.json(data);
    }
});

app.get('/api/orderProducts', (req, res) => {
    res.json({ message: 'Order products endpoint' });
});

// Serve static files (optional)
// app.use(express.static('public'));

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
