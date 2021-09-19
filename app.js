const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose = require('./config/db');
// const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');

const passport = require("passport");

//passport config:
require('./config/passport')(passport)
//mongoose
// mongoose.connect('mongodb+srv://dbUser:Deakin2021@sit725-2021-t2-week4.9iugr.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology : true})
// .then(() => console.log('Database Connected!'))
// .catch((err)=> console.log(err));


//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));
//cookieParser
app.use(cookieParser());


//express session
app.use(session({
    secret : 'noonehelpme123',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })
    
//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.listen(3000); 