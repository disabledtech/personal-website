import React from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {

  return (
    <div className="App">
      <div className="content-container">
        <Header />
        <AboutMe />
        <Projects />
        
      </div>
    </div>
  );
}

export default App;
