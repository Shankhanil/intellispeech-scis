import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// styles
import './App.css';

// assets
//import logo from './assets/static/logo/uohyd-logo.jpg';

// context
import { LanguageContext } from './context/LanguageContext';

// pages for routing
//import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <LanguageContext.Provider value='english'>
      <Router>
       
        <Route path='/' exact>
          <Header className = 'header' />
          <Home />
        </Route>
       
        <Route path='/audio' exact>
          <Header className = 'header' />
          <Home />
        </Route>
        
        <Route path='/video' exact>
          <Header className = 'header' />
          <Home />
        </Route>

        <Route path='/vform' exact>
          <Header className = 'header' />
          <Home />
        </Route>

        <Route path='/aform' exact>
          <Header className = 'header' />
          <Home />
        </Route>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
