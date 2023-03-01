//import { element } from "prop-types";
import { GET_DOGS, GET_TEMPERAMENTS } from "./actions";

const initialState = {
    dogs: [],
    temperaments: [],
    filter: []
};

const rootReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_DOGS:
            return{...state, dogs: action.payload, filter:action.payload };

        case GET_TEMPERAMENTS:
                const filterTemper = state.GET_DOGS;
                const thisTemper = [];
                for (let i=0; i< filterTemper.length; i++) {
                    if(filterTemper[i].temperament) {
                        if (filterTemper[i].temperament.includes(action.payload)) {
                        thisTemper.push(filterTemper[i])
                        }
                }
            return{...state,
                temperaments: thisTemper,
                filterTemperaments: thisTemper};
 }
         default:
            return { ...state };
    }
};

export default rootReducer;