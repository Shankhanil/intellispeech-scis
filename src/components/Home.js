import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className = 'home'>
            <div className = 'home_text'>
                SPEECH@SCIS<br/>
                Welcomes You
            </div>
            <div className = 'home_text_2'>
                Donate Your Voice And Video To Our Speech <br/>Dataset
            </div>
            <div className = 'btn'>
                <Link to = '/vform' className = 'btn_link'><button>Record your Video</button></Link>
                <Link to = '/aform' className = 'btn_link'><button>Record your Audio</button></Link>
            </div>
            </div>
    )
}

export default Home
