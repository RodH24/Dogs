const axios = require("axios");
const { Dog } = require("../db.js");
const { API_KEY } = process.env;

const getApiDataDog = async () => {

    try {
        let allDogsApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=live_Z3Hv8xEqwnZiwhOEIgfR8AMh80mDf20PuWuh2iO3tmpdzqDWy0yzmudvBm9ePX88`);

        allDogsApi = allDogsApi.data.map(dog => {
            return ({
                id: dog.id,
                image: dog.image.url,
                name: dog.name,
                height: dog.height.metric,
                weight: dog.weight.metric,
                life_span: dog.life_span
            })
        })
        return allDogsApi
    } catch (error) {
        return { error: error.message }
    }

}

const getApiDataTemperament = async () => {
    try {
        let counter = 0;
        let allDogsApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=live_Z3Hv8xEqwnZiwhOEIgfR8AMh80mDf20PuWuh2iO3tmpdzqDWy0yzmudvBm9ePX88`);
        allDogsApi = allDogsApi.data;
        let temperaments = []
        for (let i = 0; i < allDogsApi.length; i++) {
            let temp = allDogsApi[i].temperament;
            temp = temp.split(",");
            for (let j = 0; j < temp.length; j++) {
                let word = temp[j]
                word = word.trim();
                let verification = temperaments.find(tempera => tempera.name == word)
                if (verification) {

                } else {
                    temperaments.push({
                        id: counter = counter + 1,
                        name: temp[j]
                    });
                }
            }
        }
        return temperaments;
    } catch (error) {
        return { error: error.message }
    }
}


const saveData = async () => {

    try {
        let allDogs = await getApiDataDog();
        let allTemperaments = await getApiDataTemperament();
        await Dog.bulkCreate(allDogs);
        return await Temperament.bulkCreate(allTemperaments);

    } catch (error) {
        return { error: error.message }
    }


}

module.exports = saveData;

// const getDogs = async (req, res) => {

//    try {
//        let allDogsApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
//        let allDogsDB = await Dog.findAll();
//        allDogsApi = allDogsApi.data.map(dog => {
//            return ({
//                id: dog.id,
//                image: dog.image.url,
//                name: dog.name,
//                height: dog.height.metric,
//                weight: dog.weight.metric,
//                life_span: dog.life_span
//            })
//        })
//        let allDogs = allDogsApi.concat(allDogsDB);

//        res.status(200).json(allDogs)

//    } catch (error) {
//        res.status(500).json({ error: error.message })
//    }
//  };
 
// const getDogId = async (req, res) => {
//    try {
//        const idBreed = parseInt(req.params.idBreed);
//        let searchDogApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
//        searchDogApi = searchDogApi.data;
//        const findBreed = searchDogApi.find(breed => breed.id == idBreed);
//        if (findBreed) {
//            res.status(200).json({
//                id: findBreed.id,
//                image: findBreed.image.url,
//                name: findBreed.name,
//                height: findBreed.height.metric,
//                weight: findBreed.weight.metric,
//                life_span: findBreed.life_span,
//                temperaments: findBreed.temperament
//            })
//        } else {
//            const searchDogDB = await Dog.findByPk(idBreed);
//            res.status(200).json(searchDogDB)
//        }
//    } catch (error) {
//        res.status(404).json({ error: "This breed of dog does not exist" });
//    }
//  };

// const getDogName = async (req, res) => {
//    try {
//        let { beed } = req.query;
//        beed = beed.toUpperCase();
//        let searchDogApi = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
//        searchDogApi = searchDogApi.data;
//        let filterBreed = [];
//        for (let i = 0; i < searchDogApi.length; i++) {
//            let temp = searchDogApi[i].name
//            temp = temp.toUpperCase();
//            if (temp.includes(beed)) {
//                filterBreed.push({
//                    id: searchDogApi[i].id,
//                    image: searchDogApi[i].image.url,
//                    name: searchDogApi[i].name,
//                    height: searchDogApi[i].height.metric,
//                    weight: searchDogApi[i].weight.metric,
//                    life_span: searchDogApi[i].life_span,
//                    temperament: searchDogApi[i].temperament
//                })
//            }
//        }
//        if (filterBreed.length > 0) {
//            return res.status(200).json(filterBreed);
//        } else {
//            const searchDogDB = await Dog.findAll();
//            let filterBreed = [];
//            for (let i = 0; i < searchDogDB.length; i++) {
//                let temp = searchDogDB[i].name
//                temp = temp.toUpperCase();
//                if (temp.includes(beed)) {
//                    filterBreed.push(searchDogDB[i])
//                }
//            }
//            if (filterBreed.length > 0) {
//                res.status(200).json(filterBreed);
//            } else {
//                res.status(404).json({ error: "This breed of dog does not exist" });
//            }

//        }
//    } catch (error) {
//        res.status(500).json({ error: error.message });
//    }
//  };

//  const createDog = async (req, res) => {

//    try {

//        let allDogs = await axios(`http://localhost:3001/dogs`);
//        allDogs = allDogs.data;
//        let selector = allDogs.pop();
//        let id = selector.id + 1;

//        let newDog = {
//            id: id,
//            image: req.body.image,
//            name: req.body.name,
//            height: req.body.height,
//            weight: req.body.weight,
//            life_span: req.body.life_span
//        }


//        const createDog = await Dog.create(newDog);
//        let temperament = req.body.Dog_Temperament;
//        temperament.map(async el => {
//            const findTemp = await Temperament.findAll({
//                where: { name: el }
//            });
//            createDog.addTemperament(findTemp);
//        })


//        res.status(201).json(createDog);

//    } catch (error) {
//        res.status(400).json({ error: error.message })
//    }
//  };

//  const getTemperament = async (req, res) => {
//    try {
//        let allDogsApiGet = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
//        let allDogsApi = allDogsApiGet.data;
//        let temperaments = []
//        for (let i = 0; i < allDogsApi.length; i++) {
//            let temp = allDogsApi[i].temperament;
//            if (temp) {
//                temp = temp.split(",");
//                for (let j = 0; j < temp.length; j++) {
//                    let word = temp[j].trim()
//                    let verification = temperaments.find(tempera => tempera.name == word)
//                    if (verification) {

//                    } else {
//                        temperaments.push({
//                            name: temp[j].trim()
//                        });
//                    }
//                }
//            }
//        }
//        let allTempsDB = await Temperament.findAll();
//        if (allTempsDB.length > 0) {
//            res.status(200).json(allTempsDB);
//        } else {
//            let saveTemperamentsDB = await Temperament.bulkCreate(temperaments);
//            res.status(201).json(saveTemperamentsDB);
//        }

//    } catch (error) {
//        res.status(500).json({ error: error.message })
//    }
//  };

//  module.exports = {
//   getDogs,
//    getDogId,
//   getDogName,
//   createDog,
//    getTemperament,
//  };