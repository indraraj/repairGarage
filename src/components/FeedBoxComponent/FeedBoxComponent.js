import React from 'react';
import styles from './FeedBoxComponent.module.scss';
import UserImageComponent from '../../uiHelpers/UserImageComponent/UserImageComponent';
import CrossCloseComponent from '../../uiHelpers/CrossCloseComponent/CrossCloseComponent';

const FeedBoxComponent = (props) =>{
    return(
        <div className={styles.FeedBoxComponent}>
            <div>
                <UserImageComponent imgName='userImage' size='20px' imgText='userImage'></UserImageComponent>
                <span>Riya Shukla unvoted this . 4hr</span>
                <CrossCloseComponent tooltipType='close'>Hide this Section.</CrossCloseComponent>
            </div>
            <h1>What made your heart melt today?</h1>
            <div className={styles.PublisherDetail}>
                <div className={styles.imageStyle}>
                    <UserImageComponent imgName='userImage' size='40px' imgText='userImage'></UserImageComponent>
                </div>
                <div className={styles.textStyle}>
                    <p><span>Ben Hardy  </span>, formal Flight Lietutent at Royal Air Force(2005-2014)</p>
                    <p>Answered 14h ago</p>
                </div>            
            </div>
            <p>
            King Harshavardhan was defeated in the battle.

He was handcuffed and taken to the winner king.At that time the winner king was in a happy mood.

The king kept a proposal for Harshavardhan and said, “ If you can answer me a question correctly I will return your kingdom or else leave aside the kingdom, you shall have to remain a prisoner for the rest of your life in my country.”
            </p>
        </div>
    )
}

export default FeedBoxComponent;