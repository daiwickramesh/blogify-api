const express = require('express');

const app = express();
const PORT = 3000;

const postRouter = require('./src/routes/posts.routes.js');

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Blogify API');
});

// Mount router
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 