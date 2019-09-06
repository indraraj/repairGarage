import React from 'react';
import styles from './LeftGridContainer.module.scss';
import LeftGridHomeComponent from '../../components/LeftGridHomeComponent/LeftGridHomeComponent';
import LeftGridAnswerComponent from '../../components/LeftGridAnswerComponent/LeftGridAnswerComponent';
import { Switch, Route} from 'react-router';
import LeftGridProfileComponent from '../../components/LeftGridProfileComponent/LeftGridProfileComponent';

const LeftGridContainer = (props) =>{
    return (
        <div className={styles.LeftGridContainer}>
            <Switch>
                <Route path='/' exact component={LeftGridHomeComponent}></Route>
                <Route path='/answer' component={LeftGridProfileComponent}></Route>
                <Route path='/home' component={LeftGridHomeComponent}></Route>
                <Route path='/session' component={LeftGridHomeComponent}></Route>
            </Switch>
        </div>
    )
}

export default LeftGridContainer;
