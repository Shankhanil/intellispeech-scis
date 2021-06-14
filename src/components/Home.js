import React from 'react';
import './Home.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AnnotationForm from './WelcomePage/AnnotationForm.js';
import VideoRecord from  './VideoRecord/VideoRecord.js';
import AudioRecord from './AudioRecord/AudioRecord.js';

function Home() {
    return (
        <div className = 'home'>
        <Router>
            <Route exact path = '/'>
            <div className = 'home_text'>
                SPEECH@SCIS<br/>
                Welcomes You
            </div>
            <div className = 'home_text_2'>
                Donate Your Voice And Video To Our Speech <br/>Dataset
            </div>
            <div className = 'btn'>
               <Link to = '/vform' className = 'btn1'><button>Record your Video</button></Link>
               <Link to = '/aform' className = 'btn2'><button>Record your Audio</button></Link>
            </div>
            </Route>
            <Route exact path = '/vform'>
                <AnnotationForm nextPage={'/video'} />
            </Route>
            <Route exact path = '/aform'>
                <AnnotationForm nextPage={'/audio'} />
            </Route>
            <Route exact path = '/video'>
                <VideoRecord />
            </Route>
            <Route exact path = '/audio'>
                <AudioRecord />
            </Route>
        </Router>
        </div>
    )
}

export default Home
