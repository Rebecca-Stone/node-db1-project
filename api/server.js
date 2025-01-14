const express = require("express");
const accountRouter = require("./accounts/accounts-router");

const server = express();

server.use(express.json());

server.use("/api/accounts", accountRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

// server.use((err, req, res, next) => {//eslint-disable-line
//   res.status(err.status || 500).json({
//     message: err.message,
//     // stack: err.error.stack,
//   });
// });

module.exports = server;
