import React, { Component, Fragment } from 'react';
import styles from './HomeContainer.module.scss';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import ContentGridComponent from '../../components/ContentGridComponent/ContentGridComponent';

class HomeContainer extends Component {
    render(){
        return(
            <Fragment>
                <HeaderComponent></HeaderComponent>
                <div className={styles.GridPageContent}>
                    <ContentGridComponent></ContentGridComponent>
                </div>
            </Fragment>
        )
    }
}

export default HomeContainer;