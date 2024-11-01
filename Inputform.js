
import React, { useState } from 'react';
import Searchres from './Searchres';
import styles from './inputform.module.css';
import c from './../countries.json';
import PageviewIcon from '@mui/icons-material/Pageview';

function Inputform(){
    const [inp,changeinp]=useState("");
    const [res,final]=useState([]);
    const [hint, changehint] = useState([]);
    const [now, then]=useState("init");

    const action=(i)=>{
        then("fin");
        changeinp(i.country);
        const filteredc=c.filter(obj => obj.country.toLowerCase().includes(i.country.toLowerCase()) || obj.capital.toLowerCase().includes(i.capital.toLowerCase()));
        final(filteredc);
        changehint([]);
    }

    const givehint=(eve)=>{
        changeinp(eve.target.value);
        const filteredc=c.filter(obj => obj.country.toLowerCase().startsWith(eve.target.value.toLowerCase()) || obj.capital.toLowerCase().startsWith(eve.target.value.toLowerCase()));
        if(eve.target.value.length>0)
            changehint(filteredc.map((i)=><li
            onClick={()=>{action(i)}}
            >
            {i.country}</li>));
        else
            changehint("");
    }

    const find = (e)=>{
        then("fin");
        e.preventDefault();
        changehint("");
        const filteredc=c.filter(obj => obj.country.toLowerCase()===inp.toLowerCase() || obj.capital.toLowerCase()===inp.toLowerCase());
        final(filteredc);
    }

    return (
        <>
            <form onSubmit={find}>
                <input type="text"
                placeholder='Search by Country or Capital'
                value={inp}
                onChange={givehint}
                />
                <button onClick={find}><PageviewIcon sx={{fontSize: 50,
                height: 40
                }}/></button>
            </form>
            <ul 
            className={styles.hint}
            >
                {hint}
            </ul>
            <div className={styles.search}>
                <Searchres data={res} status={now}/>
            </div>
        </>
    );
}

export default Inputform;