import React,{ Fragment} from 'react';
import styles from './GridAnswerComponent.module.scss';
import GreatingAnswerComponent from '../GreatingAnswerComponent/GreatingAnswerComponent';
import QuestionsForYouComponent from '../QuestionsForYouComponent/QuestionsForYouComponent';
import QuestionByFollowerComponent from '../QuestionByFollowerComponent/QuestionByFollowerComponent';

const GridAnswerComponent = (props) =>{
    return(
        <Fragment>
            <GreatingAnswerComponent></GreatingAnswerComponent>
            <QuestionsForYouComponent></QuestionsForYouComponent>
            <QuestionByFollowerComponent></QuestionByFollowerComponent>
        </Fragment>
    )
};

export default GridAnswerComponent;