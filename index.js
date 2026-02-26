const express = require('express');
const app = express();
const PORT = 3000;

const postRouter = require('./src/routes/posts.routes');


app.get('/', (req, res) => {
  res.send('Welcome to Blogify API');
});

app.use('/api/v1/posts', postRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: { message: 'Route not found' }
  });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: { message: 'Internal Server Error' }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});