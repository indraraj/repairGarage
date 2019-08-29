import React from 'react';
import styles from './LeftGridComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const LeftGridComponent = (props) =>{
    return (
        <div className={styles.LeftGridComponent}>
                <div>
                    <div ><FontAwesomeIcon icon={faNewspaper}/></div>
                    
                    <div className={styles.textStyle}>Feed</div>
                </div>
                <div className={styles.selected}>
                    <div ><FontAwesomeIcon icon={faMicrophone}/></div>
                    
                    <div className={styles.textStyle}>Sessions</div>
                </div>
            </div>
    )
}

export default LeftGridComponent;
