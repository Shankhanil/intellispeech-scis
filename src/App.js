import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';

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
import Purpose from './components/Purpose';
function App() {
  /*const [colour, setColour] = useState('white');
  const [count, setCount] = useState(0);
  var loc = useLocation().pathname;
  useEffect(()=>{
    if(loc === '/purpose'){
    setColour('grey');
    }
    console.log(loc);
  });*/
  return (
    <LanguageContext.Provider value='english'>
      <Router key = {document.location.href}>
      
      
        <Route path='/' exact >
        <Header color = {'white'} className = 'header' />
          <Home />
        </Route>
       
        <Route path='/audio' exact>
        <Header color = {'white'} className = 'header' />
          <AudioRecord />
        </Route>
        
        <Route path='/video' exact>
        <Header color = {'white'} className = 'header' />
          <VideoRecord />
        </Route>

        <Route path='/vform' exact>
        <Header color = {'white'} className = 'header' />
          <AnnotationForm nextPage = {'/video'} />
        </Route>

        <Route path='/aform' exact>
        <Header color = {'white'} className = 'header' />
        <AnnotationForm nextPage = {'/audio'} />
        </Route>

        <Route path ='/about' exact>
        <Header color = {'white'} className = 'header' />
          <Aboutus />
        </Route>

        <Route path ='/privacy' exact>
        <Header color = {'white'} className = 'header' />
          <Privacy />
        </Route>

        <Route path = '/readme' exact>
        <Header color = {'white'} className = 'header' />
          <Readme />
        </Route>

        <Route path = '/purpose' exact>
        <Header color = {'black'} className = 'header' />
          <Purpose />
        </Route>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
