import React from 'react';
import styles from './AddTopicComponent.module.scss';
import CrossCloseComponent from '../../../uiHelpers/CrossCloseComponent/CrossCloseComponent';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AddTopicComponent = (props) =>{
    const topicArray = ['Break Up','Proposal Ideas','Live in lifestyle','Romance','Long Distance Relationship']
    return (
        <div className={styles.AddTopicComponent}>
          <div className={styles.overlayHeader}>
              <div>
                <span>Edit the topic you know about</span>
                <div className={styles.close} onClick={props.addTopic}>
                    <CrossCloseComponent showTooltip='hide'></CrossCloseComponent>
                </div>
              </div>
              <p>Topics are used to find the best experts to answer the question.</p>
          </div>
          <hr></hr>
          <div className={styles.overlayBody}>
            <div className={styles.ModelBodyContent}>
              <div>
                  <input placeholder='Search for topic'></input>
                  <ul>
                      { topicArray.map((topic)=><li keys={topic}>{topic} <span><FontAwesomeIcon icon={faTimes}/></span></li>)}
                  </ul>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className={styles.overlayFooter}>
            <div> 
              <button>
                Done
              </button>
            </div>
           
          </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addTopic: () => dispatch({type: 'ADDT'})
    }
}
export default connect(null,mapDispatchToProps)(AddTopicComponent);