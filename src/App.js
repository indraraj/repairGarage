import React from 'react';
import styles from './App.module.scss';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import ModelContainer from './containers/ModelContainer/ModelContainer';
import { BrowserRouter } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <div>
          {props.authUser ? <HomeContainer></HomeContainer> : <LoginContainer></LoginContainer>}
        </div>
        <ModelContainer></ModelContainer>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    authUser: state.userAuthenticated
  }
}

export default connect(mapStateToProps)(App);
