import React, {Component,Fragment} from 'react';
import styles from './ModelContainer.module.scss';
import AskQuestionComponent from '../../components/OverlayModels/AskQuestionComponent/AskQuestionComponent';
import {connect} from 'react-redux';
import StartAnswerComponent from '../../components/OverlayModels/StartAnswerComponent/StartAnswerComponent';

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
            </Fragment>
        )
    }
}
const mapStateToProps = state =>{
    return{
        askQ: state.askQuestion,
        ansQ: state.ansQuestion
    }
}
export default connect(mapStateToProps)(ModelContainer);