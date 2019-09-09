import React from 'react';
import './App.scss';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import ModelContainer from './containers/ModelContainer/ModelContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
            <HomeContainer></HomeContainer>
        </div>
        <ModelContainer></ModelContainer> 
      </BrowserRouter>     
    </div>
  );
}

export default App;
