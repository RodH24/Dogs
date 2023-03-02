//import { element } from "prop-types";
import { GET_DOGS, GET_TEMPERAMENTS, GET_FILT_T, GET_SORT } from "./actions";

const initialState = {
    dogs: [],
    // dogsRender: [],
    temperaments: [],
    filter: []
};

const rootReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_DOGS:
            return{...state, dogs: action.payload, filter:action.payload };

        // case "nextDogs":
        //     let dogsToRender = []
        //     for (let i = action.payload[0]; i < action.payload[1] && i < state.allDogs.length; i++) {
        //      dogsToRender.push(state.allDogs[i]);
        //     }
        //     let dogsToRenderAux = dogsToRender;
        //     dogsToRender = [];
        //     return {
        //         ...state,
        //         dogsRender: dogsToRenderAux,
        //         dogsRenderFilters: dogsToRenderAux,
        //         dogsRenderReset: dogsToRenderAux
        //         }

          case GET_TEMPERAMENTS:
            return {...state, temperaments: action.payload}

        case GET_FILT_T:
            console.log("getfilt");
            const allDogs = state.dogs;
            const filtered = [];
            const temperament = action.payload;
            if(temperament === "Todos"){
                return {...state, filter:allDogs}
            }
            for(let dog of allDogs){
                if(dog.temperament && dog.temperament.includes(temperament)) {
                    filtered.push(dog)
                }
            }
            return{...state, filter: filtered}
        case GET_SORT:
            const dogs = state.filter;
            const isAsc = action.payload.isAsc;
            const isByName = action.payload.isByName;
            console.log(isAsc, isByName);
            const sort = isByName? dogs.sort((a,b)=>{
                if(isAsc){
                    if (a.name<b.name) return -1;
                    if(a.name>b.name) return 1;
                    return 0;
                }
                else {
                    if (a.name>b.name) return -1;
                    if(a.name<b.name) return 1;
                    return 0;
                }
            }): dogs.sort((a,b)=>{
                const splitA = a.weight.split(" - ");
                const splitB = b.weight.split(" - ");
                const promA = (parseFloat(splitA[0]) + parseFloat(splitA[1]))/2;
                const promB = (parseFloat(splitB[0]) + parseFloat(splitB[1]))/2;
                if(isAsc){
                    if (promA<promB) return -1;
                    if(promA>promB) return 1;
                    return 0;
                }
                else {
                    if (promA>promB) return -1;
                    if(promA<promB) return 1;
                    return 0;
                }
            })
            return {...state, filter:sort} 
         default:
            return { ...state };
    }
};

export default rootReducer;