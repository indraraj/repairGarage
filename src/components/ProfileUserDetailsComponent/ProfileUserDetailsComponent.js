import React from 'react';
import styles from './ProfileUserDetailsComponent.module.scss';
import UserImageComponent from '../../uiHelpers/UserImageComponent/UserImageComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faQuestion, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const ProfileUserDetailsComponent = (props) =>{
    return(
        <div className={styles.ProfileUserDetailsComponent}>
            <div className={styles.userimage}>
                <UserImageComponent imgName='baeeImage' size='150px' imgText='baeeImage'></UserImageComponent>
            </div>
            <div className={styles.userDetails}>
                <h1>Riya Adhikari</h1>
                <h3>Straight-edge, sci-fi and superhero crazy, dog lover. A telly belly at heart . In possession of a smart mouth</h3>
                <p>Leo || Lovely || Dog Hero</p>
                <div className={styles.tools}>
                    <div className={styles.toolBox}>
                        <div>
                            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                            <span>Follow</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                            <span>Notify Me</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>
                            <span>Ask Question</span>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileUserDetailsComponent;