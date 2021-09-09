import React from 'react'
import '../styles/Readme.css'
function Readme() {
    return (
        <div className = 'readme'>
            <div className='readme-left'>
                <ul>
                    <li>Please use Chrome or Firefox browser</li><br />
                    <li>To begin, Click on the RECORD YOUR VIDEO button</li><br />
                    <li>Record your video using the in-app camera</li><br />
                    <li>Make sure your voice and face are captured</li><br />
                    <li>Please make sure you speak for 10-30 seconds</li><br />
                    <li>You can also read out the sample text in the bottom</li><br />
                </ul>
            </div>
             <div className = 'readme-right'></div>
        </div>
    )
}

export default Readme
