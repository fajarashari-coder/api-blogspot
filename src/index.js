import express from "express";
import postRoutes from "./routes/routePost.js";

const app = express();

app.use(express.json());
app.use("/api/post", postRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`running port ${PORT}`);
});
