import React from 'react';
import styles from './ContentGridComponent.module.scss';
import GreatingComponent from '../GreatingComponent/GreatingComponent';
import FeedBoxComponent from '../FeedBoxComponent/FeedBoxComponent';
import LeftGridContainer from '../../containers/LeftGridContainer/LeftGridContainer';
import UpcomingSessionComponent from '../UpcomingSessionComponent/UpcomingSessionComponent';
import RightGridContainer from '../../containers/RightGridContainer/RightGridContainer';

const ContentGridComponent = (props) =>{
    return (
        <div className={styles.ContentGridComponent}>
            <LeftGridContainer></LeftGridContainer>
            <div className={styles.cass2}>
                <GreatingComponent></GreatingComponent>
                <FeedBoxComponent></FeedBoxComponent>
                <UpcomingSessionComponent></UpcomingSessionComponent>
                <FeedBoxComponent></FeedBoxComponent>
                <FeedBoxComponent></FeedBoxComponent>
                <FeedBoxComponent></FeedBoxComponent>
            </div>
            <RightGridContainer></RightGridContainer>
        </div>
    )
}

export default ContentGridComponent;