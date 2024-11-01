
//import { useState } from 'react';
import styles from './searchres.module.css'
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import SearchIcon from '@mui/icons-material/Search';
import { green, red } from '@mui/material/colors';
import GlobalIcon from '@rsuite/icons/Global';

function Searchres(props){
    
    if(props.status==="init" && props.data.length===0)
        return (<>
        <h3>Your Search Results will appear here</h3>
        <div>
            <GlobalIcon pulse
            style={{fontSize:"80"}}
            color='#FF1491'
            />
                
            <SearchIcon sx={{color: green[400],
                fontSize: 150
            }}/>
        </div>
        </>
        );

        else{
            if(props.data.length===0 && props.status==="fin")
                return (<div className={styles.notfnd}><p>No Countries found</p><div><SentimentDissatisfiedRoundedIcon sx={{
                    color: red[300],
                    fontSize: 150
                }}/></div></div>)
               else
        return (
            <ul>
                {props.data.map((country, index) => (
                <li key={index} className={styles.uiul}>
                  <span><strong>{country.country}</strong></span> <br/> <span>Capital: {country.capital}</span> <span>Population: {country.population} </span>
                  <span>{country.official_language.includes(",")? "Languages":"Language"}: {country.official_language}</span><span>Currency: {country.currency}</span>
                </li>
                ))}
            </ul>);
    }
}

export default Searchres;