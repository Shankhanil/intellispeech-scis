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
import AnnotationForm from './components/WelcomePage/AnnotationForm';
import AudioRecord from './components/AudioRecord/AudioRecord';
import VideoRecord from './components/VideoRecord/VideoRecord';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className = 'main'>
    <LanguageContext.Provider value='english'>
      <Router>
      <Header className = 'header' />
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
          <AnnotationForm nextPage = {'/video'} />
        </Route>

        <Route path = '/aform' exact>
          <AnnotationForm nextPage = {'/audio'} />
        </Route>
      </Router>
    </LanguageContext.Provider>
    </div>
  );
}

export default App;
