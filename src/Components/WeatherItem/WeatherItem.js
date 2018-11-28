import React from 'react';
import styles from './WeatherItem.css';


const WeatherItem = (props) => {
    return (
        <li className={styles.weatherItem}>
            <h4>{props.day}</h4>
            <img src={require("../../img/sunny.svg")} alt="Weather Icon" className={styles.image}/>
            <p>{props.tempMin} || {props.tempMax}</p>
        </li>
    );
};


export default WeatherItem