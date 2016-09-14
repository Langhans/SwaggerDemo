var mocha = require('mocha');
var mockgoose;
var mongoose;
var User =  require('../models/user.js');
var chai = require('chai');
var expect = chai.should();

before(function(done){
    // setup to mock mongoose BEFORE db-connections are esstablished
    mockgoose = require('mockgoose');
    mongoose = require('mongoose');
    mockgoose(mongoose);

    done();
});

describe('DB should' , function(){

  beforeEach(function(done){
    mockgoose.reset();

    var user1 = new User({name : "test1"});
    // user1.name = "test1";
    var user2 = new User({name : "test2"});
    //user2.name = "test2";

    user1.save(function (err) {
      if (err) throw err;
    });
    user2.save( function(err) {
      if (err) throw err;
      done();
    });

  });

  it('...contain 2 users with name "test[0-9]*"', function(done){
    User.find(function(err, users) {
        // expect to find the documents inserted in beforeEach
        if (err) throw(err);
        users.length.should.be.equal(2);
        users.forEach(function(user){
          user.name.should.match(/test[0-9]*/);
        });
        done();
  });

  

});
});
