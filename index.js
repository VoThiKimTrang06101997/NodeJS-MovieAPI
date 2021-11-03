//Create Server
const express = require("express");
const { rootRouter } = require("./src/routers/root.router");
const app = express();

// Set Up JSON
app.use(express.json());

// http://localhost:9090/
app.get("/", (req, res) => {
  res.send("Hello NodeJS !!");
});

app.use(rootRouter);

// Server Listening at Port:    http://localhost:9090/
const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
