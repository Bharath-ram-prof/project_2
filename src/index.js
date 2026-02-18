const express = require('express');
const postsRoutes = require('./routes/posts.routes');
const app = express();
app.use(express.json());

// Base route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to Blogify API' });
// });

// // Mount posts routes
// app.use('/api/v1/posts', postsRoutes);

app.use("/api/v1/posts", postsRoutes);

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});
// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
