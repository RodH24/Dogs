const axios = require("axios");
const { Dog } = require("../db.js");
const { API_KEY } = process.env;

const getDogName = async (req, res) => {
    try {
        let { race } = req.query;
        race = race.toUpperCase();
        let searchDogApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        searchDogApi = searchDogApi.data;
        let filterRace = [];
        for (let i = 0; i < searchDogApi.length; i++) {
            let temp = searchDogApi[i].name
            temp = temp.toUpperCase();
            if (temp.includes(race)) {
                filterRace.push({
                    id: searchDogApi[i].id,
                    image: searchDogApi[i].image.url,
                    name: searchDogApi[i].name,
                    height: searchDogApi[i].height.metric,
                    weight: searchDogApi[i].weight.metric,
                    life_span: searchDogApi[i].life_span,
                    temperament: searchDogApi[i].temperament
                })
            }
        }
        if (filterRace.length > 0) {
            return res.status(200).json(filterRace);
        } else {
            const searchDogDB = await Dog.findAll();
            let filterRace = [];
            for (let i = 0; i < searchDogDB.length; i++) {
                let temp = searchDogDB[i].name
                temp = temp.toUpperCase();
                if (temp.includes(race)) {
                    filterRace.push(searchDogDB[i])
                }
            }
            if (filterRace.length > 0) {
                res.status(200).json(filterRace);
            } else {
                res.status(404).json({ error: "Esta raza de perro no existe" });
            }

        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = getDogName;