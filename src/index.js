const express = require('express');
const app = express();

const postsRoutes = require('./routes/posts.routes');

app.use(express.json());

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Blogify API' });
});

// Mount posts routes
app.use('/api/v1/posts', postsRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
