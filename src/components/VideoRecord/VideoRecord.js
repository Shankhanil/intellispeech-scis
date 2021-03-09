import { Button } from '@material-ui/core';
import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import VideoRecorder from 'react-video-recorder'
import { VideoRecordTexts } from '../../assets/ViewTexts/VideoRecordTexts';
import { LanguageContext } from '../../context/LanguageContext';

import storage from '../../firebase';

const VideoRecord = () => {
    // get the UI language
    let language = useContext(LanguageContext);
    
    // video recording state
    const [state, setState] = useState('beforeStarting');

    // reference to firebase storage
    const storageRef = storage.ref();

    // function to execute after recording is complete
    const recoringComplete = (videoBlob) => {
        // update the state
        setState('afterRecording');

        /**
         * create a reference to the new file
         * Generate filename for each person. 
         */
        var ref = storageRef.child('msg.mp4');

        // upload the file
        ref.put(videoBlob).then((snapshot) => {
            setState('uploadSuccess');
            console.log('Uploaded a blob or file!');
        });
    }

    return (
        <div>
            <Link to='/'>
                <Button>
                    Home
            </Button>
            </Link>
            <h4>
                {VideoRecordTexts.header[state.toString()][language.toString()]}
            </h4>
            <VideoRecorder
                renderDisconnectedView={() => console.log('not connected')}
                onRecordingComplete={videoBlob => recoringComplete(videoBlob) }
            />
            
        </div>
    );

}

export default VideoRecord;