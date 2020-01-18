const Dev = require('../models/dev.js');

module.exports = {
    async index(req, res) {

        const query = req.query;

        console.log(query);

        const { techs, latitude, longitude } = query;
        const techsArray = techs.split(',').map((tech) => tech.trim());

        console.log('Tira teima:', techsArray, longitude, latitude)
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 1000000
                }
            }
        });

        console.log(techsArray);
        console.log(devs);

        return res.json(devs);
    }
};
