const axios = require("axios");
const { Dog } = require("../db.js");
const { API_KEY } = process.env;

const getDogs = async (req, res) => {

    try {
        let allDogsApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        let allDogsDB = await Dog.findAll();
        allDogsApi = allDogsApi.data.map(dog => {
            return ({
                id: dog.id,
                image: dog.image.url,
                name: dog.name,
                temperament: dog.temperament,
                height: dog.height.metric,
                weight: dog.weight.metric,
                life_span: dog.life_span
            })
        })

        allDogsDB = allDogsDB.map(dog => {
            return ({
                id: dog.id,
                image: dog.image,
                name: dog.name,
                height: `${dog.min_height} - ${dog.max_height}`,
                weight: `${dog.min_weight} - ${dog.max_weight}`,
                life_span: `${dog.min_life_span} - ${dog.max_life_span}`,
            })
        })
        res.status(200).json({allDogsApi:allDogsApi, allDogsDB})

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

module.exports = getDogs;