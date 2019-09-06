import React from 'react';
import styles from './AskQuestionComponent.module.scss';
import CrossCloseComponent from '../../../uiHelpers/CrossCloseComponent/CrossCloseComponent';
import UserImageComponent from '../../../uiHelpers/UserImageComponent/UserImageComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const AskQuestionComponent = (props) =>{
    return (
        <div className={styles.AskQuestionComponent}>
          <div className={styles.overlayHeader}></div>
          <div className={styles.overlayBody}>
            <div className={styles.ModelBodyHead}>
              <div>
                <div>
                  <UserImageComponent imgName='userImage' size='30px' imgText='userImage'></UserImageComponent>
                </div>
                <div>
                  <span><span className={styles._username}>Indra Shukla</span> asked</span>
                </div>
                <div className={styles.anonymityConcent}>
                  <FontAwesomeIcon icon={faUserFriends} />
                  <span>public</span>
                </div>
              </div>
              <div className={styles.close} onClick={props.askQHandler}>
                <CrossCloseComponent showTooltip='hide'></CrossCloseComponent>
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
const mapDispatchToProps = dispatch => {
  return {
    askQHandler: () => dispatch({type: 'ASKQ'})
  }
}
export default connect(null,mapDispatchToProps)(AskQuestionComponent);