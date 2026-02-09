const express = require("express");
const postsRouter = require("./routes/posts.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

// mount posts router
app.use("/api/v1/posts", postsRouter);

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
