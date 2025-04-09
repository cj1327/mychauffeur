const express = require('express');
const router = express.Router();
const mapcontroller = require('../controllers/map.controller')
const authMiddleware = require('../middlewares/auth.middlewares')
const {query, check} = require('express-validator')


router.get('/get-coordinates', 
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.authUser, mapcontroller.getCoordinates
);

router.get('/get-distance-time',
    query('origin', 'Origin is required and must be at least 3 characters long').trim().isLength({ min: 3 }),
    query('destination', 'Destination is required and must be at least 3 characters long').trim().isLength({ min: 3 }),
    authMiddleware.authUser, mapcontroller.getDistanceTime
);

router.get(
    '/get-suggestions',
    [check('input').notEmpty().withMessage('Input query parameter is required')], // Validate 'input'
    mapcontroller.getSuggestions
  );

module.exports = router;