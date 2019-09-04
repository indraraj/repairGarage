import React, {Component,Fragment} from 'react';
import styles from './ModelContainer.module.scss';
import AskQuestionComponent from '../../components/OverlayModels/AskQuestionComponent/AskQuestionComponent';
import {connect} from 'react-redux';
import StartAnswerComponent from '../../components/OverlayModels/StartAnswerComponent/StartAnswerComponent';
import AddTopicComponent from '../../components/OverlayModels/AddTopicComponent/AddTopicComponent';

class ModelContainer extends Component {
    visibilityStyle = {
        visibility: 'hidden'
    }
    render(){
        return (
            <Fragment>
                <div className={styles.ModelContainer} style={this.props.askQ ? null : this.visibilityStyle}>
                    <AskQuestionComponent></AskQuestionComponent>
                </div>
                <div className={styles.ModelContainer} style={this.props.ansQ ? null : this.visibilityStyle}>
                    <StartAnswerComponent></StartAnswerComponent>
                </div>
                <div className={styles.ModelContainer} style={this.props.addT ? null : this.visibilityStyle}>
                    <AddTopicComponent></AddTopicComponent>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state =>{
    return{
        askQ: state.askQuestion,
        ansQ: state.ansQuestion,
        addT: state.addTopic
    }
}
export default connect(mapStateToProps)(ModelContainer);