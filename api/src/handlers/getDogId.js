const axios = require("axios");
const { Dog } = require("../db.js");
const { API_KEY } = process.env;

const getDogId = async (req, res) => {
    try {
        const raceId = parseInt(req.params.raceId);
        let searchDog = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        searchDog = searchDog.data;
        const findRace = searchDog.find(race => race.id == raceId);
        if (findRace) {
            res.status(200).json({
                id: findRace.id,
                image: findRace.image.url,
                name: findRace.height.metric,
                weight: findRace.weight.metric,
                life_span: findRace.life_span,
                temperaments: findRace.temperament
            })
        }else{
            const searchDogDB = await Dog.findByPk(raceId);
           res.status(200).json(searchDogDB)
        } 
    } catch (error) {
        res.status(404).json({ error: "Esta raza de perro no existe" });
    }
};
 module.exports = getDogId;