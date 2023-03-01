import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const getDogs = () =>{
    return async function (dispatch){
        const apiData = await axios.get('http://localhost:3001/pi/dogs');
        const dogs = apiData.data;
        dispatch({ type: GET_DOGS, payload: dogs });
    };
};

export const ID_USER = "ID_SER";
export const getUser =(id) =>{
    return async function (dispatch){
        const apiData = await axios.get('http://localhost:3001/pi/dogs/${id}');
        const users = apiData.data;
        dispatch({ type: ID_USER, payload: users });
    };
};

export const GET_TEMPERAMENTS = "TEMPERAMENTS";
export const getTemperaments =(temperaments) =>{
    return async function (dispatch){
        const apiData = await axios.get('http://localhost:3001/pi/temperaments');
        const list = apiData.data;
        dispatch({ type: GET_TEMPERAMENTS, payload: list });
    };
};