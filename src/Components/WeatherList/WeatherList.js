import React, { Component } from 'react';
import styles from './WeatherList.css';
import axios from 'axios';

import WeatherItem from '../WeatherItem/WeatherItem';


class WeatherList extends Component {
    
    state = {
        daysOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
        ],
        weatherData: {},
        zipcode: this.props.zipcode
    };

    
    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipcode},us&units=imperial&appid=207ac0eddd67fa374f18b49fb01aa66f`)
        .then(res => {
            const response = res.data.list;
            this.setState({ weatherData: response });
        })
    }

    
    render() {
        
        let data = <h1>Search for weather by zip code :)</h1>;
        {if( this.state.weatherData.length > 11 ) {
            data = this.state.weatherData.map((item, index) => {
                while(index < 5) {
                  return <WeatherItem day={this.state.daysOfWeek[index]}
                                    tempMin={Math.floor(item.main.temp_min)}
                                    tempMax={Math.ceil(item.main.temp_max)}/>
                }
            });
        }}
        
        return (
            <ul className={styles.weatherList}>
                {data}
            </ul>
        );
    }
};


export default WeatherList