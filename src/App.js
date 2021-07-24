import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// styles
import './App.css';

// assets
//import logo from './assets/static/logo/uohyd-logo.jpg';
import AnnotationForm from './components/WelcomePage/AnnotationForm';
import AudioRecord from './components/AudioRecord/AudioRecord';
import VideoRecord from './components/VideoRecord/VideoRecord';
import { LanguageContext } from './context/LanguageContext';

// pages for routing
//import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <LanguageContext.Provider value='english'>
      <div className = 'main'>
      <Header className = 'header' />
      <Router>
       <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
       
        <Route path='/audio' exact>
          <AudioRecord />
        </Route>
        
        <Route path='/video' exact>
          <VideoRecord />
        </Route>

        <Route path='/vform' exact>
          <AnnotationForm nextPage = "/video" />
        </Route>

        <Route path='/aform' exact>
          <AnnotationForm nextPage = "/audio" />
        </Route>
      </Switch>
      </Router>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
