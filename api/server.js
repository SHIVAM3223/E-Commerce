const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

// Path to the database file
const dbPath = path.join(__dirname, '../dbhome.json');

// Use JSON Server router for default routes
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

app.use(middlewares);

// Define custom routes for your API
app.get('/api/user', (req, res) => {
  res.json({ message: 'User endpoint' });
});

app.get('/api/userdetails', (req, res) => {
  res.json({ message: 'User details endpoint' });
});

app.get('/api/mens', (req, res) => {
  const { limit } = req.query;
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  const mensData = data.mens.slice(0, limit ? parseInt(limit) : 12);
  res.json(mensData);
});

app.get('/api/all', (req, res) => {
  const { item_id } = req.query;
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

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

// Rewriter to handle JSON Server routes
app.use(jsonServer.rewriter({
  '/api/*': '/$1'
}));

app.use('/api', router);

// Export the serverless function handler
module.exports = (req, res) => {
  return new Promise((resolve) => {
    const server = app.listen(3000, () => {
      resolve();
    });
    app(req, res);
    server.close();
  });
};
