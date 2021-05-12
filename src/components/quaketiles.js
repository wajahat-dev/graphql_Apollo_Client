import React from 'react';
import styles from "./quaktiles.module.css"

const QuakeTile = (props) => {
    
    return (
        <div className={styles.quaketile}>
            <div className={styles.quake}>
                
                <h3>Quake {props.id}</h3>
                
            </div>
            <p>Location {props.location}</p>
            <p>Magnitude {props.magnitude}</p>
            <p>When {props.when}</p>
        </div>
    );
}

export default QuakeTile;
