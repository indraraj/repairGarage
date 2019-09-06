import React, { Component, Fragment } from 'react';
import styles from './HomeContainer.module.scss';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import RightGridContainer from '../RightGridContainer/RightGridContainer';
import LeftGridContainer from '../LeftGridContainer/LeftGridContainer';
import GridHomeComponent from '../../components/GridHomeComponent/GridHomeComponent';
import GridAnswerComponent from '../../components/GridAnswerComponent/GridAnswerComponent';
import GridHomeSessionComponent from '../../components/GridHomeSessionComponent/GridHomeSessionComponent';
import {Switch, Route} from 'react-router';
import ProfileUserDetailsComponent from '../../components/ProfileUserDetailsComponent/ProfileUserDetailsComponent';

class HomeContainer extends Component {
    render(){
        return(
            <Fragment>
                <HeaderComponent></HeaderComponent>
                <div className={styles.GridPageContent}>
                    <div className={styles.GridPageContentSection}>
                        <div className={styles.ContentGridComponent}>
                            <div className={styles.leftandcenter}>
                                <div  className={styles.userDetails}>
                                   <ProfileUserDetailsComponent></ProfileUserDetailsComponent>
                                </div>
                                <div  className={styles.pageContent}>
                                        <LeftGridContainer></LeftGridContainer>
                                    <div className={styles.center}>
                                        <Switch>
                                            <Route path='/' exact component={GridHomeComponent}></Route>
                                            <Route path='/answer' component={GridAnswerComponent}></Route>
                                            <Route path='/session' component={GridHomeSessionComponent}></Route>
                                            <Route path='/home' component={GridHomeComponent}></Route>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                            <RightGridContainer></RightGridContainer>
                        </div>
                    </div>
                    <div className={styles.GridPageContentSectionOverlay}></div>
                </div>
            </Fragment>
        )
    }
}

export default HomeContainer;