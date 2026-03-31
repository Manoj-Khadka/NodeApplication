const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const adminData = require("./routes/admin");
app.use(bodyParser.urlencoded());

app.use("/admin", adminData.routes);
app.use(shopRoutes);
app.use(shopRoutes);
const errorController = require("./controllers/error");
app.use(errorController.get404);

app.listen(3000);
