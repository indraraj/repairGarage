import React, {useState} from 'react';
import styles from './LeftGridHomeComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router';

const LeftGridHomeComponent = (props) =>{
    const [homeMenustate, sethomeMenustate] = useState('feed');
    const gridMenuHandler = (selectedMenu) =>{
        sethomeMenustate(selectedMenu);
        let selectedPath = selectedMenu === 'feed' ? 'home' : selectedMenu; 
        props.history.push(`/${selectedPath}`);
    }
    return(
        <div className={styles.LeftGridHomeComponent}>
            <div className={ homeMenustate=== 'feed' ? styles.selected : null} onClick={() => gridMenuHandler('feed')}>
                <div ><FontAwesomeIcon icon={faNewspaper}/></div>
                    
                <p className={styles.textStyle}>Feed</p>
            </div>
            <div className={ homeMenustate=== 'session' ? styles.selected : null} onClick={() => gridMenuHandler('session')}>
                <div ><FontAwesomeIcon icon={faMicrophone}/></div>
                        
                <p className={styles.textStyle}>Sessions</p>
            </div>
        </div>
    )
};

export default withRouter(LeftGridHomeComponent);