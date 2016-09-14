var mongoose = require('mongoose');

var url = "mongodb://127.0.0.1:27017/users";

  mongoose.connect( url , function(err){
    if (err) throw(err);
  });

