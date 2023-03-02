//import { element } from "prop-types";
import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_FILT_T,
  GET_SORT,
  GET_PAGES,
} from "./actions";

const initialState = {
  dogs: [],
  temperaments: [],
  filter: [],
  paginated: [],
  numberOfPage: 0,
  sizePage: 10,
  currentPage: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      const sizePage0 = state.sizePage;
      const currentPage0 = state.currentPage;
      const allDogsF0 = action.payload;
      const inicio0 = sizePage0 * currentPage0;
      const fin0 = inicio0 + sizePage0;
      const paginated0 = allDogsF0.slice(inicio0, fin0);
      return {
        ...state,
        dogs: action.payload,
        filter: action.payload,
        paginated: paginated0,
        numberOfPage: Math.ceil(action.payload.length / 10),
      };

    case GET_PAGES:
      const sizePage = action.payload.sizePage;
      const currentPage = action.payload.currentPage;
      const allDogsF = state.filter;
      const inicio = sizePage * currentPage;
      const fin = inicio + sizePage;
      const paginated = allDogsF.slice(inicio, fin);
      return {
        ...state,
        paginated,
        sizePage,
        currentPage,
        numberOfPage: Math.ceil(allDogsF.length / 10),
      };

    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };

    case GET_FILT_T:
      const allDogs = state.dogs;
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
      const sizePage1 = state.sizePage;
      const currentPage1 = state.currentPage;
      const allDogsF1 = filtered;
      const inicio1 = sizePage1 * currentPage1;
      const fin1 = inicio1 + sizePage1;
      const paginated1 = allDogsF1.slice(inicio1, fin1);
      return {
        ...state,
        filter: filtered,
        paginated: paginated1,
        numberOfPage: Math.ceil(allDogsF1.length / 10),
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
      const sizePage2 = state.sizePage;
      const currentPage2 = state.currentPage;
      const allDogsF2 = sort;
      const inicio2 = sizePage2 * currentPage2;
      const fin2 = inicio2 + sizePage2;
      const paginated2 = allDogsF2.slice(inicio2, fin2);
      return {
        ...state,
        filter: sort,
        paginated: paginated2,
        numberOfPage: Math.ceil(allDogsF2.length / 10),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
