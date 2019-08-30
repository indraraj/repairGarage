import React from 'react';
import styles from './AskQuestionComponent.module.scss';
import CrossCloseComponent from '../../../uiHelpers/CrossCloseComponent/CrossCloseComponent';
import UserImageComponent from '../../../uiHelpers/UserImageComponent/UserImageComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

const AskQuestionComponent = (props) =>{
    return (
        <div className={styles.AskQuestionComponent}>
          <div className={styles.overlayHeader}></div>
          <div className={styles.overlayBody}>
            <div>
              <CrossCloseComponent tooltipType='close'></CrossCloseComponent>
            </div>
            <div className={styles.ModelBodyHead}>
              <div>
                <UserImageComponent imgName='userImage' size='30px' imgText='userImage'></UserImageComponent>
              </div>
              <div>
              <span>Indra Shukla asked</span>
              </div>
              <div className={styles.anonymityConcent}>
                <FontAwesomeIcon icon={faUserFriends} />
                <span>public</span>
              </div>
            </div>
            <div className={styles.ModelBodyContent}>
              <div>
                <input placeholder='Open Your Heart and ask it out.'></input>
                <hr></hr>
              </div>
              <div>
                <p> Attach the documents here.</p>
              </div>
            </div>
          </div>
          <div className={styles.overlayFooter}>
            <hr></hr>
            <div> 
              <button>
                Add Question
              </button>
              <span>
                Cancle
              </span>
            </div>
           
          </div>
        </div>
    )
}

export default AskQuestionComponent;