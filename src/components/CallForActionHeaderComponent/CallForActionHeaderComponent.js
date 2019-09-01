import React from 'react';
import styles from './CallForActionHeaderComponent.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBriefcase, faStar, faUser } from '@fortawesome/free-solid-svg-icons';


const CallForActionHeaderComponent = (props) =>{
    let icon;
    switch(props.iconName){
        case 'faBriefcase':
            icon = faBriefcase;
            break;
        case 'faStar':
             icon = faStar;
             break;
        case 'faUser':
            icon = faUser;
            break;     
        default:
            icon = '';
    }
    return(
        <div className={styles.CallForActionHeaderComponent}>
            <FontAwesomeIcon icon={icon}/>
            <span>{props.children}</span>
        </div>
    )
}

export default CallForActionHeaderComponent;