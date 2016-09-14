

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : { type: String , required : true },
    createdAt : { type: Date , default : Date.now() }
});

userSchema.methods.toString = function(){
  return "[ " + this.name + "(@ " + this.createdAt + ") ]";
}

module.exports = mongoose.model( 'User' , userSchema);
