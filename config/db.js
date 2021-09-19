const mongoose = require('mongoose');

const uri = 'mongodb+srv://dbUser:Deakin2021@sit725-2021-t2-week4.9iugr.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('Database Connected!'))
.catch((err)=> console.log(err));

module.exports = exports = mongoose;



