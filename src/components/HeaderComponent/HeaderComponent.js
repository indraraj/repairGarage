import React, {useState, useEffect} from 'react';
import styles from './HeaderComponent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faBell } from '@fortawesome/free-regular-svg-icons';
import UserImageComponent from '../../uiHelpers/UserImageComponent/UserImageComponent';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

const HeaderComponent = (props) =>{
    const getHeaderStateVal = () =>{
        switch (props.location.pathname){
            case '/':
                return 'home';
            case '/home':
                return 'home';
            case '/session':
                return 'home';
            case '/answer':
                return 'answer';
            case '/notification':
                return 'notification';
            default:
                return 'home'    
        }
    }
    const [headerState, setHeaderState] = useState({headSection: getHeaderStateVal(), askQuestion: true});
    const logoClickHandler = () =>{
        props.history.push('/');
        window.location.reload();
    }
    // useEffect(()=>{
    //     console.log('Header',props.location.pathname);
    // });
    const headerNavHandler = (selectedSection) =>{
        // console.log('Header',props);
        let region = selectedSection;
        setHeaderState({headSection:region, askQuestion: headerState.askQuestion});
        props.history.push(`/${selectedSection}`);

    }
    return(
        <div className={styles.HeaderComponent}>
            <div className={styles.HedearLogo} onClick={logoClickHandler}>
                <h1>repair Garage</h1>
            </div>
            <div className={styles.HeaderNav}>
                <div className={headerState.headSection === 'home' ? styles.selected : null} onClick={() => headerNavHandler('home')}>
                    <FontAwesomeIcon icon={faHome} size="lg"/>
                    <span>Home</span>
                </div>
                <div className={headerState.headSection === 'answer' ? styles.selected : null} onClick={() => headerNavHandler('answer')}>
                    <FontAwesomeIcon icon={faEdit} size="lg"/>
                    <span>Answer</span>
                </div>
                <div className={headerState.headSection === 'notification' ? styles.selected : null} onClick={() => headerNavHandler('notification')}>   
                    <FontAwesomeIcon icon={faBell} size="lg"/>
                    <span>Notification</span>
                </div>
            </div>
            <div className={styles.HeaderTopsection}>
                <div className={styles.searchBox}>
                    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}></FontAwesomeIcon>
                    <input type='text'></input>
                </div>
                <div className={styles.profileImage}>
                    <UserImageComponent imgName='userImage' size='30px' imgText='userImage'></UserImageComponent>
                </div>
                <div className={styles.addQuestion}>
                    <button onClick={props.askQHandler}>Add Question</button>
                </div>
            </div>
        </div>
    )
    
}

// const mapStateToProps = (state) =>{
//     return {
//         askQ : state.askQuestion
//     }
// }
const mapDispatchToProps = dispatch =>{
    return{
        askQHandler: () => {
            return dispatch({type: 'ASKQ'});
        }
    };
}
export default connect(null, mapDispatchToProps)(withRouter(HeaderComponent));