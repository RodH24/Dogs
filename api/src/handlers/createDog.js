const { Dog } = require("../db.js");
const { Temperament } = require("../db.js");
const axios = require("axios");

const createDog = async (req, res) => {

    try {
        let allDogs = await axios(`http://localhost:3001/pi/dogs`);
        allDogs = allDogs.data;
        let selector = allDogs.pop();
        let id = selector.id + 1;

        let newDog = {
            id: id,
            image: req.body.image,
            name: req.body.name,
            height: req.body.height,
            weight: req.body.weight,
            life_span: req.body.life_span
        }

        const createDog = await Dog.create(newDog);
        let temperament = req.body.Dog_Temperament;
        temperament.map(async el => {
            const findTemper = await Temperament.findAll({
                where: { name: el }
            });
            createDog.addTemperament(findTemper);
        })

        res.status(201).json(createDog);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = createDog;