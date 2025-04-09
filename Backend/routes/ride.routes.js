const experes = require("express");
const router = experes.Router();
const {body, query} = require('express-validator')
const rideController = require('../controllers/ride.controller')
const authMiddleware = require('../middlewares/auth.middlewares')

router.post('/create', 
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Pickup location must be at least 3 characters long'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Destination must be at least 3 characters long'),
    body('vehicleType')
        .isString()
        .customSanitizer(value => value.toLowerCase()) // Convert to lowercase
        .isIn(['motorcycle', 'car', 'auto']).withMessage('Vehicle type must be one of the following: motorcycle, car, auto'),
    rideController.createRide
);

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Pickup location must be at least 3 characters long'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Destination must be at least 3 characters long'),
    rideController.getFare 
)

module.exports = router;