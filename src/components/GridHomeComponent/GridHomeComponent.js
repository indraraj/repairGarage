import React,{ Fragment } from 'react';
import GreatingHomeComponent from '../GreatingHomeComponent/GreatingHomeComponent';
import FeedBoxComponent from '../FeedBoxComponent/FeedBoxComponent';
import UpcomingSessionComponent from '../UpcomingSessionComponent/UpcomingSessionComponent';
import QuestionsForYouComponent from '../QuestionsForYouComponent/QuestionsForYouComponent';

const GridHomeComponent = (props) =>{
    return (
        <Fragment>
            <GreatingHomeComponent></GreatingHomeComponent>
            <FeedBoxComponent></FeedBoxComponent>
            <UpcomingSessionComponent></UpcomingSessionComponent>
            <QuestionsForYouComponent></QuestionsForYouComponent>
            <FeedBoxComponent></FeedBoxComponent>
            <FeedBoxComponent></FeedBoxComponent>
        </Fragment>
    )
}

export default GridHomeComponent;