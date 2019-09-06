import React from 'react';
import styles from './FeedBoxComponent.module.scss';
import UserImageComponent from '../../uiHelpers/UserImageComponent/UserImageComponent';
import CrossCloseComponent from '../../uiHelpers/CrossCloseComponent/CrossCloseComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';


const FeedBoxComponent = (props) =>{
    return(
        <div className={styles.FeedBoxComponent}>
            <div className={styles.feedTop}>
                <div>
                    <UserImageComponent imgName='riyaImage' size='20px' imgText='riyaImage'></UserImageComponent>
                    <span><span className={styles._username}>Riya Adhikari</span>upvoted this . 4hr</span>
                </div>
                <div>
                    <CrossCloseComponent showTooltip='show'>Hide this Section.</CrossCloseComponent>
                </div>
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
            <div className={styles.feedContent}>
                <p>
                King Harshavardhan was defeated in the battle.

    He was handcuffed and taken to the winner king.At that time the winner king was in a happy mood.

    The king kept a proposal for Harshavardhan and said, “ If you can answer me a question correctly I will return your kingdom or else leave aside the kingdom, you shall have to remain a prisoner for the rest of your life in my country.”
    He was handcuffed and taken to the winner king.At that time the winner king was in a happy mood.He was handcuffed and taken to the winner king.At that time the winner king was in a happy mood.
                </p>
            </div>
            <div  className={styles.feedBoxFooter}>
                <FontAwesomeIcon className={styles.iconPadding} icon={faHeart}/>
                <FontAwesomeIcon className={styles.iconPadding} icon={faComment}/>
                <div>
                    <FontAwesomeIcon className={styles.iconPadding} icon={faEllipsisH}/>
                    <FontAwesomeIcon className={styles.iconPadding} icon={faShare}/>
                </div>
            </div>
        </div>
    )
}

export default FeedBoxComponent;