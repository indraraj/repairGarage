import React, {Component} from 'react';
import styles from './ModelContainer.module.scss';
import AskQuestionComponent from '../../components/OverlayModels/AskQuestionComponent/AskQuestionComponent';

class ModelContainer extends Component {
    render(){
        return (
            <div className={styles.ModelContainer}>
                <AskQuestionComponent></AskQuestionComponent>
            </div>
        )
    }
}

export default ModelContainer;