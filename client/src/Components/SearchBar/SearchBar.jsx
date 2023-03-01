import React from 'react'
import { useSelector } from "react-redux"
import styles from "./SearchBar.module.css";
import { useDispatch } from 'react-redux';
import { getTemperaments } from "../../redux/actions"


const SearchBar = ()=> {

    const temperaments = useSelector(state=>state.temperaments)
    const dispatch = useDispatch();
     
     return (
        <><label>Temperamentos: </label><select>
             <option>Todos</option>
             {temperaments?.map((temp) => {
                 return (<option value={temp.name} key={temp.id}>{temp.name}</option>);
             })}
         </select><button className={styles.searchButton} onClick={() => {
             dispatch(getTemperaments());
         } }>Filtrar</button></>
     )
 }

export default SearchBar;