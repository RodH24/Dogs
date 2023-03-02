import React from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { changeOrigin } from "../../redux/actions";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [origin, setorigin] = useState("api");

  return (
    <>
      <label>Origen: </label>
      <select onChange={(event)=>{
        setorigin(event.target.value)
        dispatch(changeOrigin(event.target.value === "api"))
      }}>
        <option value="api">Por API</option>
        <option value="created">Por DB</option>
      </select>
    </>
  );
};

export default SearchBar;
