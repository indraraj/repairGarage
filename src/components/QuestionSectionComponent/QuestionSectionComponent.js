import React from 'react';
import styles from './QuestionSectionComponent.module.scss';
import CrossCloseComponent from '../../uiHelpers/CrossCloseComponent/CrossCloseComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faComment } from '@fortawesome/free-regular-svg-icons';
import { faRss, faEllipsisH} from '@fortawesome/free-solid-svg-icons';

const QuestionSectionComponent = (props) =>{
    return(
        <div className={styles.QuestionSectionComponent}>
            <div className={styles.topSection}>
                <span>Question added . Breakup</span>
                <CrossCloseComponent showTooltip='show'>Hide this story.</CrossCloseComponent>
            </div>
            <h1>
                How did you get over your breakup and move on?
            </h1>
            <div className={styles.topSection}>
                <span><strong>1 Answer</strong> . Last follow 26 Aug</span>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerTools}>
                    <div>
                        <FontAwesomeIcon className={styles.iconPadding} icon={faEdit}/>
                        <span>Answer</span>
                    </div>
                    <div>
                        <FontAwesomeIcon className={styles.iconPadding} icon={faComment}/>
                        <span>Pass</span>
                    </div>
                    <div>
                        <FontAwesomeIcon className={styles.iconPadding} icon={faRss}/>
                        <span>Follow</span>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon className={styles.iconPadding} icon={faEllipsisH}/>
                </div>
            </div>
        </div>
    )
}

export default QuestionSectionComponent;