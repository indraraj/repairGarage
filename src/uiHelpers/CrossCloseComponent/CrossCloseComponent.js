import React from 'react';
import styles from './CrossCloseComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const CrossCloseComponent = (props) =>{
    const toolType = props.tooltipType;
    return (
        <div className={styles.CrossCloseComponent}>
            {toolType === 'close' ? <FontAwesomeIcon icon={faWindowClose}/> : ''}
            
            <span>{props.children}</span>
        </div>
    )
}

export default CrossCloseComponent;