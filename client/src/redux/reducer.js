//import { element } from "prop-types";
import { GET_DOGS, GET_TEMPERAMENTS } from "./actions";

const initialState = {
    users: [],
    temperaments: [],
    filter: []
};

const rootReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_DOGS:
            return{...state, users: action.payload, filter:action.payload };

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
    
        // case "getFilterT":
        //         const filterByTemper = state.allDogs;
        //         const withThisTemper = [];
        //         for (let i = 0; i < filterByTemper.length; i++) {
        //             if (filterByTemper[i].temperament) {
        //                 if (filterByTemper[i].temperament.includes(action.payload)) {
        //                     withThisTemper.push(filterByTemper[i])
        //                 }
        //             }
        //         }
        //         return {
        //             ...state,
        //             dogsRender: withThisTemper,
        //             dogsRenderFilters: withThisTemper
        //         }
        //         case "oderByOrigin":
        //             let allDogs = state.allDogs;
        //             if (action.payload == "api") {
        //                 allDogs = allDogs.filter(dog => dog.id < 265);
        //                 const [zero, one, two, three, four, five, six, seven, ...rest] = allDogs;
        //                 return {
        //                     ...state,
        //                     dogsRender: [zero, one, two, three, four, five, six, seven],
        //                     allDogs: allDogs
        //                 }
        //             } else {
        //                 let allDogs = state.allDogsReserve.filter(dog => dog.id > 264);
        //                 return {
        //                     ...state,
        //                     dogsRender: allDogs
        //                 }
        //             }
        
        
        //         case "orderByName":
        //             let allDogsOrderByName = state.allDogs;
        //             if (action.payload == "ascending") {
        //                 allDogsOrderByName.sort((a, b) => {
        //                     let nameA = a.name.toLowerCase();
        //                     let nameB = b.name.toLowerCase();
        //                     if (nameA < nameB) {
        //                         return -1
        //                     }
        //                     if (nameA > nameB) {
        //                         return 1
        //                     } else {
        //                         return 0;
        //                     }
        //                 })
        //             } else {
        //                 allDogsOrderByName.sort((a, b) => {
        //                     let nameA = a.name.toLowerCase();
        //                     let nameB = b.name.toLowerCase();
        //                     if (nameA > nameB) {
        //                         return -1
        //                     }
        //                     if (nameA < nameB) {
        //                         return 1
        //                     } else {
        //                         return 0;
        //                     }
        //                 })
        //             }
        //             const [zero, one, two, three, four, five, six, seven] = allDogsOrderByName;
        //             return {
        //                 ...state,
        //                 dogsRender: [zero, one, two, three, four, five, six, seven],
        //                 allDogs: allDogsOrderByName
        //             }
        
        //         case "oderByWeight":
        //             let allDogsOrderByWeight = state.allDogs;
        //             if (action.payload == "ascending") {
        //                 allDogsOrderByWeight.sort((a, b) => parseInt(a.weight) - parseInt(b.weight));
        //             }
        //             else {
        //                 allDogsOrderByWeight.sort((a, b) => parseInt(b.weight) - parseInt(a.weight));
        //             }
        //             const [zero0, one1, two2, three3, four4, five5, six6, seven7] = allDogsOrderByWeight;
        //             return {
        //                 ...state,
        //                 dogsRender: [zero0, one1, two2, three3, four4, five5, six6, seven7],
        //                 allDogs: allDogsOrderByWeight
                     }
        default:
            return { ...state };
    }
};

export default rootReducer;