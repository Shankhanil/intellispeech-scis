import React from 'react';
import { Route, BrowserRouter as Router, useLocation } from 'react-router-dom';

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
import Aboutus from './components/Aboutus';
import Privacy from './components/Privacy';
import Readme from './components/Readme';
function App() {
  var loc = useLocation().pathname.substr(1);
  console.log(loc);
  return (
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

        <Route path='/aform' exact>
        <AnnotationForm nextPage = {'/audio'} />
        </Route>

        <Route path ='/about' exact>
          <Aboutus />
        </Route>

        <Route path ='/privacy' exact>
          <Privacy />
        </Route>

        <Route path = '/readme' exact>
          <Readme />
        </Route>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
