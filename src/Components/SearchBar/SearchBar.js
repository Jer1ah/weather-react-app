import React from 'react';
import styles from './SearchBar.css';


const SearchBar = (props) => {
    return (
        <div className={styles.searchBar}>
            <input type="text"/>
            <button onClick={props.click}>Get Forecast!</button>
        </div>
    );
};


export default SearchBar