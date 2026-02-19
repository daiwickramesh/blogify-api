
const express = require('express');
const app = express();
const PORT = 3000;

// Import posts router
const postRouter = require('./routes/posts.routes');

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Blogify API');
});

// Mount router
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});