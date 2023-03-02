const { Router } = require("express");
const  getDogs  = require("../handlers/getDogs");
const  getDogId  = require("../handlers/getDogId");
const  getDogName  = require("../handlers/getDogName");
const  createDog  = require("../handlers/createDog");
const  getTemperament  = require("../handlers/getTemperament");

const usersRouter = Router();

usersRouter.get("/dogs", getDogs);

usersRouter.get('/dogs/:raceId', getDogId);

usersRouter.get('/dogs/name?=', getDogName);

usersRouter.post('/dogs', createDog);

usersRouter.get('/temperament', getTemperament);

module.exports = usersRouter;