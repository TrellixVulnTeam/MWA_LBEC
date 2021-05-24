const express = require("express");
const { dirname } = require("path");
const path = require("path");
const app = express();
const routes=require("./routes")

app.set("port", 3001);

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
})

app.use(express.static(path.join(__dirname, "public")));

app.use("/api",routes);

const server = app.listen(app.get("port"), function () {
    const port = server.address().port;
    console.log("Listening to port " + port);
});
