import React from 'react';
import styles from './GridProfileComponent.module.scss';
import FeedBoxComponent from '../FeedBoxComponent/FeedBoxComponent';

const GridProfileComponent = (props) =>{
    return (
        <div className={styles.GridProfileComponent}>
            <div className={styles.profileTop}>
                <div>
                    <span>30 Answer</span>
                </div>
                <div>
                    <span><span>Most Recent</span> / <span className={styles.ansTypeNotSelected}>All-Time Views</span></span>
                </div>

            </div>
            <FeedBoxComponent></FeedBoxComponent>
            <FeedBoxComponent></FeedBoxComponent>
            <FeedBoxComponent></FeedBoxComponent>
            <FeedBoxComponent></FeedBoxComponent>
            <FeedBoxComponent></FeedBoxComponent>

        </div>

    )
};

export default GridProfileComponent;