import React from 'react';
import styles from './RightGridAddTopicComponent.module.scss';
import {connect} from 'react-redux';

const RightGridAddTopicComponent = (props) =>{
    return(
        <div>
            <div className={styles.RightGridAddTopicComponent}>
                <p>Add Topic you want to know about.</p>
                <span>Adding more topic will help us find question for you to answer.</span>
                <button onClick={props.ansQHandler}>Add Topic</button>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
        ansQHandler: () => {
            return dispatch({type: 'ANSQ'});
        }
    };
}
export default connect(null,mapDispatchToProps)(RightGridAddTopicComponent);