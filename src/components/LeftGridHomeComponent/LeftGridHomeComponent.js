import React, {useState} from 'react';
import styles from './LeftGridHomeComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const LeftGridHomeComponent = (props) =>{
    const [homeMenustate, sethomeMenustate] = useState('feed');
    return(
        <div className={styles.LeftGridHomeComponent}>
            <div className={ homeMenustate=== 'feed' ? styles.selected : null} onClick={() => sethomeMenustate('feed')}>
                <div ><FontAwesomeIcon icon={faNewspaper}/></div>
                    
                <p className={styles.textStyle}>Feed</p>
            </div>
            <div className={ homeMenustate=== 'session' ? styles.selected : null} onClick={() => sethomeMenustate('session')}>
                <div ><FontAwesomeIcon icon={faMicrophone}/></div>
                        
                <p className={styles.textStyle}>Sessions</p>
            </div>
        </div>
    )
};

export default LeftGridHomeComponent;