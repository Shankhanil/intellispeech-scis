import React, { useState, useContext, useEffect } from 'react'
import { Link } from "react-router-dom";

// video recorder component
import VideoRecorder from 'react-video-recorder'

// assets
import { VideoRecordTexts } from '../../assets/ViewTexts/VideoRecordTexts';
import { LanguageContext } from '../../context/LanguageContext';

// firebase storage object
import storage from '../../firebase';

// material ui
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const VideoRecord = () => {
    // get the UI language
    let language = useContext(LanguageContext);

    // video recording state
    const [state, setState] = useState('beforeStarting');
    // reference to firebase storage
    const storageRef = storage.ref();

    let uid, ageVal, genderVal;

    // hooks
    useEffect(() => {
        uid = localStorage.getItem('uid');
        ageVal = localStorage.getItem('ageVal');
        genderVal = localStorage.getItem('genderVal');

        console.log({uid, ageVal, genderVal}); 
    }, []);

    // function to execute after recording is complete
    const recoringComplete = (videoBlob) => {
        // update the state
        setState('afterRecording');
        /**
         * create a reference to the new file
         * Generate filename for each person. 
         */
        const filename = `${uid}.mp4`;
        var ref = storageRef.child(filename);
        console.log(filename);

        // upload the file
        // ref.put(videoBlob).then((snapshot) => {
        //     console.log(snapshot);
        //     setState('uploadSuccess');
        //     console.log('Uploaded a blob or file!');
        // });
    }

    const ShowReadText = () => {
        return <p> {VideoRecordTexts.readTexts[language.toString()]} </p>;
    }

    return (
        <div>
            
            <Link to='/'>
                <IconButton>
                    <HomeIcon />
                </IconButton>
            </Link>
            <VideoRecorder
                renderDisconnectedView={() => console.log('not connected')}
                onRecordingComplete={videoBlob => recoringComplete(videoBlob)}
            />
            <ShowReadText />
        </div>
    );

}

export default VideoRecord;