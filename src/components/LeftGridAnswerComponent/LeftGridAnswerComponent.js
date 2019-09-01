import React from 'react';
import styles from './LeftGridAnswerComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faSquare } from '@fortawesome/free-solid-svg-icons';

const LeftGridAnswerComponent = (props) =>{
    return(
        <div className={styles.LeftGridAnswerComponent}>
            <div>
                {/* <div ><FontAwesomeIcon icon={faNewspaper}/></div> */}
                    
                <p className={styles.textStyle}>Questions</p>
            </div>
            <div className={styles.selected}>                    
                <p className={styles.textStyle}>Questions for you</p>
                <div >
                    <FontAwesomeIcon icon={faSquare} size="lg"/>
                    <span>2</span>
                </div>
            </div>
            <div>
                {/* <div ><FontAwesomeIcon icon={faNewspaper}/></div> */}
                    
                <p className={styles.textStyle}>Answer requests</p>
            </div>
            <div>                    
                <p className={styles.textStyle}>Answer later</p>
                <div >
                    <FontAwesomeIcon icon={faSquare} size="lg"/>
                    <span>3</span>
                </div>
            </div>
        </div>
    )
}

export default LeftGridAnswerComponent;