import React from 'react';
import styles from './CrossCloseComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CrossCloseComponent = (props) =>{
    const hideTooTip = {
        display: 'none'
    }
    const showTooltip = props.showTooltip;
    return (
        <div className={styles.CrossCloseComponent}>
            <FontAwesomeIcon icon={faTimes}/>
            <span style={showTooltip === 'hide' ? hideTooTip : null}>{props.children}</span>
        </div>
    )
}

export default CrossCloseComponent;