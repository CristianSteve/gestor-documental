const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const app = express();

//settings
app.set("port", process.env.PORT || 4000); //Accede a puerto de variable del sistema sino existe accede al 4000

//middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(fileUpload());

//routes
app.use("/api/users", require("./routes/users"));
app.use("/api/documents", require("./routes/documents"));

module.exports = app;
