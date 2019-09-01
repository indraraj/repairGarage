import React from 'react';
import styles from './QuestionsForYouComponent.module.scss';
import CallForActionHeaderComponent from '../CallForActionHeaderComponent/CallForActionHeaderComponent';
import QuestionSectionComponent from '../QuestionSectionComponent/QuestionSectionComponent';

const QuestionsForYouComponent = (props) =>{
    return(
        <div className={styles.QuestionsForYouComponent}>
            <CallForActionHeaderComponent iconName='faStar'>Questions For You</CallForActionHeaderComponent>
            <div>
                <QuestionSectionComponent></QuestionSectionComponent>
                <QuestionSectionComponent></QuestionSectionComponent>
                <QuestionSectionComponent></QuestionSectionComponent>
            </div>

        </div>
    )
}

export default QuestionsForYouComponent;