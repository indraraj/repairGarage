import React from 'react';
import styles from './UpcomingSessionComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import UserImageComponent from '../../uiHelpers/UserImageComponent/UserImageComponent';

const UpcomingSessionComponent = (props) =>{
    return(
        <div className={styles.UpcomingSessionComponent}>
            <div className={styles.componentHeading}>
                <FontAwesomeIcon icon={faMicrophone}/>
                <span>Upcoming Sessions</span>
            </div>
            <div className={styles.scrollSection}>
                {/* <div className={styles.scrollLeft}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </div> */}
                <div className={styles.scrollCards}>
                    <div className={styles.scrollCardsTop}>
                        <div className={styles.scrollCardsHeading}>
                            <UserImageComponent size='30px' imgName='userImage' imgText='userImage'></UserImageComponent>
                            <div>
                                <p>Kazerina Rules</p>
                                <span>Co-founder and CEO of Renovo</span>
                            </div>
                        </div>
                        <div>Answering today at 1PM.</div>
                    </div>
                    <div className={styles.scrollCardsFooter}>
                        <p>View Session</p>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>

                </div>

                <div className={styles.scrollCards}>
                    <div className={styles.scrollCardsTop}>
                        <div className={styles.scrollCardsHeading}>
                            <UserImageComponent size='30px' imgName='userImage' imgText='userImage'></UserImageComponent>
                            <div>
                                <p>Riya Adhikari</p>
                                <span>Co-founder and CEO of Repair Grarge</span>
                            </div>
                        </div>
                        <div>Answering today at 9PM.</div>
                    </div>
                    <div className={styles.scrollCardsFooter}>
                        <p>View Session</p>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>

                </div>

                <div className={styles.scrollCards}>
                    <div className={styles.scrollCardsTop}>
                        <div className={styles.scrollCardsHeading}>
                            <UserImageComponent size='30px' imgName='userImage' imgText='userImage'></UserImageComponent>
                            <div>
                                <p>Crish Harish</p>
                                <span>Co-founder and CEO of Renovo</span>
                            </div>
                        </div>
                        <div>Answering today at 1PM.</div>
                    </div>
                    <div className={styles.scrollCardsFooter}>
                        <p>View Session</p>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>

                </div>

            </div>
            <div className={styles.componentBottom}>
                <p>View all Sessions</p>
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
        </div>
    )
}

export default UpcomingSessionComponent;