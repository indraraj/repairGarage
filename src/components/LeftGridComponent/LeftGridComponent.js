import React from 'react';
import styles from './LeftGridComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const LeftGridComponent = (props) =>{
    return (
        <div className={styles.LeftGridComponent}>
                <div>
                    <div ><FontAwesomeIcon icon={faNewspaper}/></div>
                    
                    <p className={styles.textStyle}>Feed</p>
                </div>
                <div className={styles.selected}>
                    <div ><FontAwesomeIcon icon={faMicrophone}/></div>
                    
                    <p className={styles.textStyle}>Sessions</p>
                </div>
            </div>
    )
}

export default LeftGridComponent;
