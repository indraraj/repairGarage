import React from 'react';
import styles from './QuestionByFollowerComponent.module.scss';
import CallForActionHeaderComponent from '../CallForActionHeaderComponent/CallForActionHeaderComponent';
import QuestionSectionComponent from '../QuestionSectionComponent/QuestionSectionComponent';

const QuestionByFollowerComponent = (props) =>{
    return(
        <div className={styles.QuestionByFollowerComponent}>
            <CallForActionHeaderComponent iconName='faUser'>Asked by people you follow</CallForActionHeaderComponent>
            <div>
                <QuestionSectionComponent></QuestionSectionComponent>
                <QuestionSectionComponent></QuestionSectionComponent>
            </div>

        </div>
    )
}

export default QuestionByFollowerComponent;