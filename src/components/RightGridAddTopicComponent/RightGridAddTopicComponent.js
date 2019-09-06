import React from 'react';
import styles from './RightGridAddTopicComponent.module.scss';

const RightGridAddTopicComponent = (props) =>{
    return(
        <div>
            <div className={styles.RightGridAddTopicComponent}>
                <p>Add Topic you want to know about.</p>
                <span>Adding more topic will help us find question for you to answer.</span>
                <button onClick={props.addTopic}>Add Topic</button>
            </div>
        </div>
    )
}

export default RightGridAddTopicComponent;