const axios = require('axios');
const Dev = require('../models/dev');

module.exports = {
    async index(req, res){
        return res.json(await Dev.find());
    },

    async store(req, res){
        const { github_username, techs, longitude, latitude } = req.body;

        // Look for user on database
        let dev = await Dev.findOne({github_username});

        //console.log("dev", dev);

       // If user doesnt exist, create one
        if ( !dev ){
            // request github for user data
            const apiReqString = `https://api.github.com/users/${github_username}`;
            const apiResponse = await axios.get(apiReqString);
            let {avatar_url, name=github_username,  bio } = apiResponse.data;

            // if name doesnt exist, name=login
            if( !name ){
                name = github_username;
            }

            // set location
            const location  = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };

            console.log(name, avatar_url, bio, latitude, longitude);

            // create new mongodb item
            let dev = Dev.create({
                name,
                github_username,
                avatar_url,
                bio,
                techs,
                location
            });

            dev.catch((err) => {
                console.log('Catched an error');
                console.log(err);
            });

            dev = await dev;

            console.log(`Added user ${name}`);
            console.log(dev);

            return res.json(dev);
        }

        const message = "Existing user";

        console.log(message);

        return res.json({message});
    }};
