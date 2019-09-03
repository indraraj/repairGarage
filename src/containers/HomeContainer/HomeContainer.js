import React, { Component, Fragment } from 'react';
import styles from './HomeContainer.module.scss';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import RightGridContainer from '../RightGridContainer/RightGridContainer';
import LeftGridContainer from '../LeftGridContainer/LeftGridContainer';
import GridHomeComponent from '../../components/GridHomeComponent/GridHomeComponent';
import GridAnswerComponent from '../../components/GridAnswerComponent/GridAnswerComponent';
import GridHomeSessionComponent from '../../components/GridHomeSessionComponent/GridHomeSessionComponent';

class HomeContainer extends Component {
    render(){
        return(
            <Fragment>
                <HeaderComponent></HeaderComponent>
                <div className={styles.GridPageContent}>
                    <div className={styles.GridPageContentSection}>
                        <div className={styles.ContentGridComponent}>
                            <LeftGridContainer></LeftGridContainer>
                            <div className={styles.cass2}>
                                <GridHomeComponent></GridHomeComponent>
                                {/* <GridAnswerComponent></GridAnswerComponent> */}
                                {/* <GridHomeSessionComponent></GridHomeSessionComponent> */}
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