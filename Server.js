const express = require("express");

// Middlewares
const cors = require("cors");
const morgan = require("morgan");

// Routes
const routes = require("./routes")

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("common"));
  }

  routes() {
    this.app.use("/sync", routes.sync);
  }

  init() {
    this.app.listen(this.port, () => {
      console.log(`Server init in port ${this.port}`);
      console.log(`http://localhost:${this.port}`);
    });
  }
}


module.exports = Server;