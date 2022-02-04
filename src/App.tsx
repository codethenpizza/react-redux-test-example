import React from 'react';
import './App.css';
import Title from "./components/title";
import CounterDisplay from "./components/counter-display";
import ReduxValueControl from "./components/redux-value-control";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Title text={'hello'} />
          <CounterDisplay/>
          <ReduxValueControl/>
      </header>
    </div>
  );
}

export default App;
