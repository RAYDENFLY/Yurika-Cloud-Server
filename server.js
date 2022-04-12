const { logger } = require('../../Cloud_Info/Logger');
require('dotenv').config();
const config = require('./System/Config/config.json')
var express = require('express');
var app = express();

app.set("view engine", "ejs")
app.get("../", function (req, res) {
    res.render("index")
});

app.use(express.static("views/"))

app.get('*', function(req, res){
  res.render("404")
});
app.listen(config.PORT);

//Process Server ( Commit by : RAYDENFLY)
const Replit = (process.env.REPLIT_DB_URL !== undefined);
function initialize(replit = false) {
 if (replit) {
    logger.info('[REPLIT HOST] [STARTING WEBSERVER]');
    return require('./System/Main/YurikaCL');
  } return require('./System/Main/YurikaCL');
}
initialize(Replit);