import React from 'react';
import styles from './RightGridContainer.module.scss';
import { connect } from 'react-redux';
import { Switch, Route} from 'react-router';
import RightGridAddTopicComponent from '../../components/RightGridAddTopicComponent/RightGridAddTopicComponent';
import RightGridProfileComponent from '../../components/RightGridProfileComponent/RightGridProfileComponent';

const RightGridContainer = (props) =>{
    return(
        <div className={styles.RightGridContainer}>  
            <Switch>
                <Route path='/' exact component={RightGridAddTopicComponent}></Route>
                <Route path='/answer' component={RightGridAddTopicComponent}></Route>
                <Route path='/home' component={RightGridAddTopicComponent}></Route>
                <Route path='/session' component={RightGridAddTopicComponent}></Route>
                <Route path='/profile' component={RightGridProfileComponent}></Route>
            </Switch>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addTopic: () => dispatch({type: 'ADDT'})
    }
}
export default connect(null,mapDispatchToProps)(RightGridContainer);