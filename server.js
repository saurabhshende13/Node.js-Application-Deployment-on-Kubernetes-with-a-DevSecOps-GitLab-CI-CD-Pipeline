const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Start server
app.listen(port, () => {
  console.log(`✅ App running at http://localhost:${port}`);
});
