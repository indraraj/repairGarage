import React from 'react';
import styles from './RightGridContainer.module.scss';
import { connect } from 'react-redux';

const RightGridContainer = (props) =>{
    return(
        <div className={styles.RightGridContainer}>  
            <div className={styles.containerBox}>
                <p>Add Topic you want to know about.</p>
                <span>Adding more topic will help us find question for you to answer.</span>
                <button onClick={props.addTopic}>Add Topic</button>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addTopic: () => dispatch({type: 'ADDT'})
    }
}
export default connect(null,mapDispatchToProps)(RightGridContainer);