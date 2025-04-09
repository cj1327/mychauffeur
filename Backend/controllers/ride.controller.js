const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator'); // Import validationResult from express-validator


module.exports.createRide = async (req, res) =>{
    const errors = validationResult(req); // validate the request using express-validator
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() }); // send validation errors if any
    }
   
    const { userId, pickup, destination, vehicleType } = req.body; // destructure the request body  

    try{
        const ride = await rideService.createRide({ 
            user: req.user._id, // get the user ID from the request object
            pickup, 
            destination, 
            vehicleType 
        }); // call the service to create a ride
        res.status(201).json(ride); // send the created ride as a JSON response
    }
    catch (error) {
        console.error("Error creating ride:", error); // log the error
        res.status(500).json({ error: "Failed to create ride" }); // send an error response if something goes wrong
    }   
}

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req); // validate the request using express-validator
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() }); // send validation errors if any
    }

    const { pickup, destination } = req.query; // destructure the query parameters

    try{
        const fare = await rideService.getFare({ pickup, destination }); // call the service to get fare
        res.status(200).json(fare); // send the fare as a JSON response
    }
    catch (error) {
        console.error("Error fetching fare:", error); // log the error
        res.status(500).json({ error: "Failed to fetch fare" }); // send an error response if something goes wrong
    }
}