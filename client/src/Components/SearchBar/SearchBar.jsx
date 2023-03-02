import React from 'react'
import { useSelector } from "react-redux"
import styles from "./SearchBar.module.css";
import { useDispatch } from 'react-redux';
import { getTemperaments } from "../../redux/actions"
import { getSort } from '../../redux/actions';
import { useState } from 'react';


const SearchBar = ()=> {

    const temperaments = useSelector(state=>state.temperaments)

     
     return (
        <>
        <label>Temperamentos: </label><select>
             <option value='api'>Existentes</option>
             {temperaments?.map((temp) => {
                 return (<option value={temp.name} key={temp.id}>{temp.name}</option>);
             })}
             <option value='created'>Creados</option>
         </select>
         </>   
     )
 }

export default SearchBar;