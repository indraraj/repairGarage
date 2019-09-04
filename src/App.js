import React from 'react';
import './App.scss';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import ModelContainer from './containers/ModelContainer/ModelContainer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <HomeContainer></HomeContainer>
        </BrowserRouter>      
      </div>
      <ModelContainer></ModelContainer> 
    </div>
  );
}

export default App;
