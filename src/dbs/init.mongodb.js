"use strict";

const mongoose = require("mongoose");
const connectString =
  "mongodb+srv://mitu:hihi@cluster0.tloz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
class Database {
  constructor() {
    this.connect();
  }
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString)
      .then((_) => console.log("sucess connect mongo"))
      .catch((err) => console.log("failure:", err));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const instanceMogodb = Database.getInstance();
module.exports = instanceMogodb;