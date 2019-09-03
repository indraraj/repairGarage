import React from 'react';
import styles from './GreatingHomeComponent.module.scss';
import UserImageComponent from '../../uiHelpers/UserImageComponent/UserImageComponent';
import {connect} from 'react-redux';

const GreatingHomeComponent = (props) =>{
    return(
        <div className={styles.GreatingHomeComponent}>
            <div>
                <UserImageComponent imgName='userImage' size='20px' imgText='userImage'></UserImageComponent>
                <span>Indra Shukla</span>
            </div>
            <h1 onClick={props.askQHandler}>
                What is Your Question?
            </h1>            
        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
        askQHandler: () => {
            return dispatch({type: 'ASKQ'});
        }
    };
}
export default connect(null,mapDispatchToProps)(GreatingHomeComponent);