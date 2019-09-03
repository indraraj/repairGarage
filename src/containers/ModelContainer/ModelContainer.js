import React, {Component} from 'react';
import styles from './ModelContainer.module.scss';
import AskQuestionComponent from '../../components/OverlayModels/AskQuestionComponent/AskQuestionComponent';
import {connect} from 'react-redux';

class ModelContainer extends Component {
    visibilityStyle = {
        visibility: 'hidden'
    }
    render(){
        return (
            <div className={styles.ModelContainer} style={this.props.askQ ? null : this.visibilityStyle}>
                <AskQuestionComponent></AskQuestionComponent>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        askQ: state.askQuestion
    }
}
export default connect(mapStateToProps)(ModelContainer);