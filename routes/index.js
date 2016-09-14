var router = require('express').Router();
var controller = require('../controller');
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
router.get('/users' , controller.getAllUsers);

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
router.post('/users', controller.addUser);

module.exports = router;
