import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import styles from "./Detail.module.css";

const Detail = ()=>{
    const { detailId } = useParams();
    const [dog, setDog] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3001/pi/dogs/${detailId}`)
            .then((response) => response.json())
            .then((dog) => {
                if (dog.name) {
                    setDog(dog);
                } else {
                    window.alert("Dog not found");
                }
            })
            .catch((err) => {
                window.alert(err.message);
            });
        return setDog({});
    }, [detailId]);


    return (
        <div>

            <div>
                <div className={styles.divDetails}>
                    <img className={styles.img} src={dog.image}></img>
                    <h1 >Name: {dog.name}</h1>
                    <h2>ID: {dog.id}</h2>
                    <h2>Height: {dog.height} cm</h2>
                    <h2>Weight: {dog.weight} kg</h2>
                    <h2>Temperaments: {dog.temperaments}</h2>
                    <h2>Life Span: {dog.life_span}</h2>
                </div>
            </div>
        </div>
    )   
}

export default Detail;