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
        const apiData = await axios.get('http://localhost:3001/pi/temperament');
        const list = apiData.data;
        dispatch({ type: GET_TEMPERAMENTS, payload: list });
    };
};

export const GET_FILT_T = "GET_FILT_T";
export const getFiltT = (temperament) =>{
    return async function (dispatch){ 
    dispatch({ type: GET_FILT_T, payload: temperament });
};
};

export const GET_SORT = "GET_SORT";
export const getSort = ({isAsc, isByName}) =>{ 
    return async function (dispatch){ 
    dispatch({ type: GET_SORT, payload: {isAsc, isByName}});
};
};

export const GET_PAGES = "GET_PAGES";
export const getPages = ({sizePage, currentPage}) =>{ 
    return async function (dispatch){ 
    dispatch({ type: GET_PAGES, payload: {sizePage, currentPage}});
};
};