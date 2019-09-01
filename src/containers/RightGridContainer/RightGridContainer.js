import React from 'react';
import styles from './RightGridContainer.module.scss';

const RightGridContainer = (props) =>{
    return(
        <div className={styles.RightGridContainer}>  
            <div className={styles.containerBox}>
                <p>Add Topic you want to know about.</p>
                <span>Adding more topic will help us find question for you to answer.</span>
                <button>Add Topic</button>
            </div>
        </div>
    )
}

export default RightGridContainer;