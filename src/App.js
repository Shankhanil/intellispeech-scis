import { Route, BrowserRouter as Router } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';

import './App.css';
// import logo from './logo.svg';
import logo from './assets/static/logo/uohyd-logo.jpg';
import { LanguageContext } from './context/LanguageContext';
import AudioRecord from './components/AudioRecord/AudioRecord';
import VideoRecord from './components/VideoRecord/VideoRecord';

function App() {
  return (
    <LanguageContext.Provider value='english'>
      <img src={logo} alt="uohyd" />
      <Router>
       
        <Route path='/' exact>
          <WelcomePage />
        </Route>
       
        <Route path='/audio' exact>
          <AudioRecord />
        </Route>
        
        <Route path='/video' exact>
          <VideoRecord />
        </Route>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
