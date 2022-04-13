const { logger } = require('./System/Client/LogClient.js'); // send log database
require('dotenv').config();
const config = require('./System/Config/config.json')
// Definisi Library yang digunakan
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('req-flash');
const app = express();

// Definisi lokasi file router
const loginRoutes = require('./System/Routes/router-login');
const registerRoutes = require('./System/Routes/router-register');
const appRoutes = require('./System/Routes/router-app');

// Configurasi dan gunakan library
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configurasi library session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'YurikaCL',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: 60000
    },
}))
app.use(flash());

// Setting folder views
app.set('views',path.join(__dirname,'src/views'));
app.set('view engine', 'ejs');

// Gunakan routes yang telah didefinisikan
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/', appRoutes);

// Gunakan port server
app.listen(5050, ()=>{
    console.log('Server Berjalan di Port : '+5050);
});


app.use(flash());

// Hapus Cache browser
app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.setHeader('Pragma', 'no-cache');
    next();
});

app.set('views',path.join(__dirname,'src/views'));

//Process Server ( Commit by : RAYDENFLY)
const Replit = (process.env.REPLIT_DB_URL !== undefined);
function initialize(replit = false) {
 if (replit) {
    logger.info('[REPLIT HOST] [STARTING WEBSERVER]');
    return require('./System/Main/YurikaCL');
  } return require('./System/Main/YurikaCL');
}
initialize(Replit);