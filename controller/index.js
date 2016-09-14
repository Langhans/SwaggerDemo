var User = require('../models/user');
/**
 * @swagger
 * definition:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *       createdAt:
 *         type: string
 *         format: date
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Users
 *         schema:
 *           $ref: '#/definitions/User'
 */
module.exports.getAllUsers = function(req,res){
var users = User.find({} , function(err , hits){

  if (err) throw (err);

  if (hits)  {
    res.status(200).json(hits);
  } else {
    res.status(400).json({message : "No Data found!"});
    }
});
}

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: string
 *         description: Puppy object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully created
 */
module.exports.addUser = function(req,res){
  var name = req.body.name;

  if ( name && new String(name).length > 1 ){
    var user = require('../models/user')();
    user.name = name;
    user.save( function(err){
      if (err) throw err;
      res.status(200).json(user.name);
    });
  } else{
    res.send(400).json({message : "Error in parameters"});
  }
}
