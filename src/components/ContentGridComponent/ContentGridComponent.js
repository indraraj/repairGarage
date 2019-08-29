import React from 'react';
import styles from './ContentGridComponent.module.scss';
import GreatingComponent from '../GreatingComponent/GreatingComponent';
import FeedBoxComponent from '../FeedBoxComponent/FeedBoxComponent';
import LeftGridComponent from '../LeftGridComponent/LeftGridComponent';

const ContentGridComponent = (props) =>{
    return (
        <div className={styles.ContentGridComponent}>
            <LeftGridComponent></LeftGridComponent>
            <div className={styles.cass2}>
                <GreatingComponent></GreatingComponent>
                <FeedBoxComponent></FeedBoxComponent>
                <FeedBoxComponent></FeedBoxComponent>
                <FeedBoxComponent></FeedBoxComponent>
                <FeedBoxComponent></FeedBoxComponent>
            </div>
            <div className={styles.cass3}>

            </div>
        </div>
    )
}

export default ContentGridComponent;