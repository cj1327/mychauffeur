const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();


module.exports.getAddressCoordinates = async (address) => {
  
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey};
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}


module.exports.getDistanceAndTime = async (origin, destination) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    console.log('Google Maps API Key:', process.env.GOOGLE_MAPS_API);
    const url = https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey};
    try {
        const response = await axios.get(url);
        console.log('Google API Response:', response.data);
        
        if (response.data.status === 'OK') {
            const distance = response.data.rows[0].elements[0].distance.text;
            const duration = response.data.rows[0].elements[0].duration.text;
            return {
                distance: distance,
                duration: duration
            };
        } else {
            throw new Error('Unable to fetch distance and time');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
    
}


module.exports.getAddressSuggestions = async (input) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey};
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}