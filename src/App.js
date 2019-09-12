import React from 'react';
import styles from './App.module.scss';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import images from './assets/images/Images '; 
import ModelContainer from './containers/ModelContainer/ModelContainer';
import { BrowserRouter } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer/LoginContainer';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <div>
            {/* <HomeContainer></HomeContainer> */}
            <LoginContainer></LoginContainer>
        </div>
        <ModelContainer></ModelContainer> 
      </BrowserRouter>     
    </div>
  );
}

export default App;
