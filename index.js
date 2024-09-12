const express = require("express");
const userRouter = require("./routes/user");
const { connectMongoDb } = require("./connection");
const { logHandler } = require("./middlewares");

const app = express();

port = 3000;

// mongoose
//   .connect("mongodb://127.0.0.1:27017/myUsers")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log("Error" + err));

connectMongoDb("mongodb://127.0.0.1:27017/myUsers")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error" + err));

app.use(express.urlencoded({ extended: false }));

app.use(logHandler("log.txt"));

app.use("/api/user", userRouter);
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
