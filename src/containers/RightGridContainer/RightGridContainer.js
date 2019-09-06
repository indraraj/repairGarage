import React from 'react';
import styles from './RightGridContainer.module.scss';
import { connect } from 'react-redux';
import RightGridAddTopicComponent from '../../components/RightGridAddTopicComponent/RightGridAddTopicComponent';
import RightGridProfileComponent from '../../components/RightGridProfileComponent/RightGridProfileComponent';

const RightGridContainer = (props) =>{
    return(
        <div className={styles.RightGridContainer}>  
            {/* <RightGridAddTopicComponent></RightGridAddTopicComponent> */}
            <RightGridProfileComponent></RightGridProfileComponent>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addTopic: () => dispatch({type: 'ADDT'})
    }
}
export default connect(null,mapDispatchToProps)(RightGridContainer);