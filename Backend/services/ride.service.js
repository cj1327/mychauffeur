const rideModel = require('../models/ride.model');
const mapService = require('../services/maps.service');
const crypto = require('crypto');

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceAndTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        motorcycle: 20
    };

    const perKmrate = {
        auto: 10,
        car: 15,
        motorcycle: 8
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        motorcycle: 1.5
    };

    // Parse distance and duration into numbers
    const distanceInKm = parseFloat(distanceTime.distance.replace(' km', '').replace(',', ''));
    const durationInMinutes = parseFloat(distanceTime.duration.replace(' hours', '').replace(' mins', '').replace(',', ''));

    if (isNaN(distanceInKm) || isNaN(durationInMinutes)) {
        throw new Error('Invalid distance or duration received from Google Maps API');
    }

    console.log('Parsed Distance (km):', distanceInKm);
    console.log('Parsed Duration (mins):', durationInMinutes);

    const fare = {
        auto: baseFare.auto + (distanceInKm * perKmrate.auto) + (durationInMinutes * perMinuteRate.auto),
        car: baseFare.car + (distanceInKm * perKmrate.car) + (durationInMinutes * perMinuteRate.car),
        motorcycle: baseFare.motorcycle + (distanceInKm * perKmrate.motorcycle) + (durationInMinutes * perMinuteRate.motorcycle)
    };

    console.log('Calculated Fare:', fare);

    return fare;
}

module.exports.getFare = getFare;

function getOtp(num) {
    function generateRandomOTP() {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }

    return generateRandomOTP(num);
}

module.exports.createRide = async ({ user, pickup, destination, vehicleType }) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('User, pickup, destination and vehicleType are required');
    }

    // Ensure vehicleType is in lowercase
    vehicleType = vehicleType.toLowerCase();

    const fare = await getFare(pickup, destination);

    if (!fare[vehicleType]) {
        throw new Error(Invalid vehicle type: ${vehicleType});
    }

    const ride = new rideModel({
        user,
        pickup,
        destination,
        otp: getOtp(4),
        fare: fare[vehicleType]
    });

    return await ride.save();
};