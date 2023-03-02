//import { element } from "prop-types";
import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_FILT_T,
  GET_SORT,
  GET_PAGES,
  CHANGE_ORIGIN,
  GET_ONE_DOG
} from "./actions";

const initialState = {
  dogs: [],
  dogsDb: [],
  isFromApi: true,
  temperaments: [],
  filter: [],
  paginated: [],
  numberOfPage: 0,
  sizePage: 10,
  currentPage: 0,
  dogDetails: {}
};

function paginate(currentPage, sizePage, list) {
  const inicio = sizePage * currentPage;
  const fin = inicio + sizePage;
  const paginated = list.slice(inicio, fin);
  return paginated;
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      const allDogsByOrigin = state.isFromApi
        ? action.payload.allDogsApi
        : action.payload.allDogsDB;
      const pagAllDogs = paginate(
        state.currentPage,
        state.sizePage,
        allDogsByOrigin
      );
      return {
        ...state,
        dogs: action.payload.allDogsApi,
        dogsDb: action.payload.allDogsDB,
        filter: allDogsByOrigin,
        paginated: pagAllDogs,
        numberOfPage: Math.ceil(allDogsByOrigin.length / 10),
      };

    case GET_PAGES:
      const sizePage = action.payload.sizePage;
      const currentPage = action.payload.currentPage;
      const allDogsF = state.filter;

      const pagPages = paginate(
        action.payload.currentPage,
        action.payload.sizePage,
        state.filter
      );
      return {
        ...state,
        paginated: pagPages,
        sizePage,
        currentPage,
        numberOfPage: Math.ceil(allDogsF.length / 10),
      };

    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };

    case GET_FILT_T:
      const allDogs = state.isFromApi ? state.dogs : state.dogsDb;
      const filtered = [];
      const temperament = action.payload;
      if (temperament === "Todos") {
        return { ...state, filter: allDogs };
      }
      for (let dog of allDogs) {
        if (dog.temperament && dog.temperament.includes(temperament)) {
          filtered.push(dog);
        }
      }

      const pagFilterDogs = paginate(
        state.currentPage,
        state.sizePage,
        filtered
      );
      return {
        ...state,
        filter: filtered,
        paginated: pagFilterDogs,
        numberOfPage: Math.ceil(pagFilterDogs.length / 10),
      };
    case GET_SORT:
      const dogs = state.filter;
      const isAsc = action.payload.isAsc;
      const isByName = action.payload.isByName;
      const sort = isByName
        ? dogs.sort((a, b) => {
            if (isAsc) {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            } else {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            }
          })
        : dogs.sort((a, b) => {
            const splitA = a.weight.split(" - ");
            const splitB = b.weight.split(" - ");
            const promA = (parseFloat(splitA[0]) + parseFloat(splitA[1])) / 2;
            const promB = (parseFloat(splitB[0]) + parseFloat(splitB[1])) / 2;
            if (isAsc) {
              if (promA < promB) return -1;
              if (promA > promB) return 1;
              return 0;
            } else {
              if (promA > promB) return -1;
              if (promA < promB) return 1;
              return 0;
            }
          });
      const pagSortDogs = paginate(state.currentPage, state.sizePage, sort);
      return {
        ...state,
        filter: sort,
        paginated: pagSortDogs,
        numberOfPage: Math.ceil(sort.length / 10),
      };
    case CHANGE_ORIGIN:
      const resetDogsByOrigin = action.payload? state.dogs: state.dogsDb;
      const resetDogs = paginate(0, 10, resetDogsByOrigin);

      return {
        ...state,
        isFromApi: action.payload,
        sizePage: 10,
        currentPage: 0,
        filter: resetDogsByOrigin,
        paginated: resetDogs,
        numberOfPage: Math.ceil(resetDogsByOrigin.length/10)
      };
    case GET_ONE_DOG:
      const dog = action.payload;
      return {...state, dogDetails:dog}
    default:
      return { ...state };
  }
};

export default rootReducer;
