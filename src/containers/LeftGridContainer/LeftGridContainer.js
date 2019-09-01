import React from 'react';
import styles from './LeftGridContainer.module.scss';
import LeftGridHomeComponent from '../../components/LeftGridHomeComponent/LeftGridHomeComponent';
import LeftGridAnswerComponent from '../../components/LeftGridAnswerComponent/LeftGridAnswerComponent';

const LeftGridContainer = (props) =>{
    return (
        <div className={styles.LeftGridContainer}>
            {/* <LeftGridHomeComponent></LeftGridHomeComponent> */}
            <LeftGridAnswerComponent></LeftGridAnswerComponent>
        </div>
    )
}

export default LeftGridContainer;
