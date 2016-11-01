import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => {
  console.log("Rendering app component");
  return (
    <div>
      <h1>Bench Bnb</h1>
      <GreetingContainer />
      {children}
    </div>
  );
};

export default App;
