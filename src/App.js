import React from 'react';
import './App.scss';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import ModelContainer from './containers/ModelContainer/ModelContainer';

function App() {
  return (
    <div className="App">
      <div>
        <HomeContainer></HomeContainer>
      </div>
      <ModelContainer></ModelContainer> 
    </div>
  );
}

export default App;
