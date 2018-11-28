import React, { Component } from 'react';
import styles from './App.css';

import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import WeatherList from './Components/WeatherList/WeatherList.js'


class App extends Component {
    
    
  state = {
      zipcode: null
  }  
    
  searchWeather = () => {
    this.setState({ zipcode: 28124 });
    console.log(this.state.zipcode)
  }
    
  render() {
    return (
      <div className={styles.app}>
        <Header title="5-Day Forecast"/>
        <SearchBar click={this.searchWeather}/>
        <WeatherList zipcode={this.state.zipcode}/>
      </div>
    );
  }
}

export default App;
