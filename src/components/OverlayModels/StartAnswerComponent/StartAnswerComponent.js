import React from 'react';
import styles from './StartAnswerComponent.module.scss';
import CrossCloseComponent from '../../../uiHelpers/CrossCloseComponent/CrossCloseComponent';
import UserImageComponent from '../../../uiHelpers/UserImageComponent/UserImageComponent';
import {connect} from 'react-redux';

const StartAnswerComponent = (props) =>{
    return (
        <div className={styles.StartAnswerComponent}>
          <div className={styles.overlayHeader}>
              <span>Start taking Question</span>
              <div className={styles.close} onClick={props.ansQuestion}>
                  <CrossCloseComponent showTooltip='hide'></CrossCloseComponent>
              </div>
          </div>
          <hr></hr>
          <div className={styles.overlayBody}>
          <div className={styles.ModelBodyHead}>
              <div>
                <div>
                  <UserImageComponent imgName='userImage' size='25px' imgText='userImage'></UserImageComponent>
                </div>
                <div>
                  <span><span className={styles._username}>Indra Shukla</span> is taking questions on...</span>
                </div>
              </div>
            </div>
            <div className={styles.ModelBodyContent}>
              <div>
                  <input placeholder='type topics'></input>
                  <p>...until thur at 4pm.</p>
                  <h2>About taking questions</h2>
                  <ul>
                      <li>Specific subjects get best answers.</li>
                      <li>Once you start, you will take questions till 24 hr until you stop.</li>
                      <li>Your closest followers will be notified.</li>
                  </ul>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className={styles.overlayFooter}>
            <div> 
              <button>
                Start
              </button>
            </div>
           
          </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        ansQuestion: () => dispatch({type: 'ANSQ'})
    }
}
export default connect(null,mapDispatchToProps)(StartAnswerComponent);