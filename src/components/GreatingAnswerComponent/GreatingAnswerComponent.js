import React from 'react';
import styles from './GreatingAnswerComponent.module.scss';
import CallForActionHeaderComponent from '../CallForActionHeaderComponent/CallForActionHeaderComponent';
import { connect } from 'react-redux';

const GreatingAnswerComponent = (props) =>{
    return(
        <div className={styles.GreatingAnswerComponent}>
            <CallForActionHeaderComponent iconName='faBriefcase'>Start asking questions.</CallForActionHeaderComponent>
            <div className={styles.footer}>
                <span>Tell your followers what kind of questions you want.</span>
                <button onClick={props.ansQuestion}>Get started</button>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        ansQuestion: () => dispatch({type: 'ANSQ'})
    }
}
export default connect(null,mapDispatchToProps)(GreatingAnswerComponent);