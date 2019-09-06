import React from 'react';
import styles from './LeftGridProfileComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons';

const LeftGridProfileComponent = (props) => {
    return(
<div className={styles.LeftGridProfileComponent}>
            <div>
                <p className={styles.textStyle}>Feeds</p>
            </div>
            <div className={styles.selected}>                    
                <p className={styles.textStyle}>Questions</p>
                <div >
                    <span>2</span>
                </div>
            </div>
            <div>   
                <p className={styles.textStyle}>Answers</p>
            </div>
            <div>                    
                <p className={styles.textStyle}>Followers</p>
                <div >
                    <span>312</span>
                </div>
            </div>
            <div>                    
                <p className={styles.textStyle}>Followings</p>
                <div >
                    <span>253</span>
                </div>
            </div>
            <div>                    
                <p className={styles.textStyle}>Edits</p>
            </div>
            <div>                    
                <p className={styles.textStyle}>Activity</p>
            </div>
        </div>
    )
};

export default LeftGridProfileComponent;
