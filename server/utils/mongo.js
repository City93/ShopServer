const mongoose = require("mongoose");
const dbUrl = process.env.DATABASE_URL

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db established"));

module.exports = mongoose;