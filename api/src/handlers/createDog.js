const { Dog } = require("../db.js");
const { Temperament } = require("../db.js");
const axios = require("axios");

const createDog = async (req, res) => {

    try {
        let allDogs = await axios(`http://localhost:3001/pi/dogs`);
        allDogs = allDogs.data.allDogsDB;
        let selector = allDogs.pop();
        let id = selector? selector.id + 1: 1;

        let newDog = {
            id: id,
            image: req.body.image,
            name: req.body.name,
            min_height: req.body.min_height,
            max_height: req.body.max_height,
            min_weight: req.body.min_weight,
            max_weight: req.body.max_weight,
            min_life_span: req.body.min_life_span,
            max_life_span: req.body.max_life_span
        }

        const createDog = await Dog.create(newDog);
       
        res.status(201).json(createDog);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = createDog;