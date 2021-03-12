import React, { useState, useContext, useEffect } from 'react'
import { Link, Redirect } from "react-router-dom";

// video recorder component
import VideoRecorder from 'react-video-recorder'

// assets
import { VideoRecordTexts } from '../../assets/ViewTexts/VideoRecordTexts';
import { LanguageContext } from '../../context/LanguageContext';

// firebase storage object
import storage from '../../firebase';

// material ui
import { Button, IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const VideoRecord = () => {
    // get the UI language
    let language = useContext(LanguageContext);

    // video recording state
    const [state, setState] = useState('beforeStarting');
    // reference to firebase storage
    const storageRef = storage.ref();

    // let uid, ageVal, genderVal;

    const [annotation, setAnnotation] = useState({
        uid: '0',
        ageVal: '0',
        genderVal: '',
    });

    // hooks
    useEffect(() => {
        const uid = localStorage.getItem('uid');
        const ageVal = localStorage.getItem('ageVal');
        const genderVal = localStorage.getItem('genderVal');

        // console.log({uid, ageVal, genderVal}); 
        // setAnnotation({...annotation, uid : uid,  });
        setAnnotation({...annotation, uid : uid, ageVal : ageVal, genderVal : genderVal });
        // setAnnotation({...annotation, ageVal : ageVal });
        // setAnnotation({...annotation, genderVal : genderVal });
        // setAnnotation(annotation => {uid: uid});
    }, []);

    // function to execute after recording is complete
    const recoringComplete = (videoBlob) => {
        // update the state
        setState('afterRecording');
        /**
         * create a reference to the new file
         * Generate filename for each person. 
         */
        const videoFile = `${annotation.uid}.mp4`;
        const annotationFile = `${annotation.uid}_annotation.mp4`;
        
        var videoRef = storageRef.child(videoFile);
        var annotationRef = storageRef.child(annotationFile);

        // upload the video-file
        videoRef.put(videoBlob).then((snapshot) => {
            console.log(snapshot);
            // setState('uploadSuccess');
            console.log('Uploaded a blob or file!');
            // upload the video-file
            annotationRef.putString(videoBlob).then((snapshot) => {
                console.log(snapshot);
                setState('uploadSuccess');
                console.log('Uploaded annotation string!');
            });        
        });
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
            {/* <p> {annotation.uid}, {annotation.ageVal}, {annotation.genderVal} </p> */}
            <VideoRecorder
                renderDisconnectedView={() => console.log('not connected')}
                onRecordingComplete={videoBlob => recoringComplete(videoBlob)}
            />
            <ShowReadText />
            {/* <Button onClick={() => {setState('afterRecording')}}> after </Button> */}
            {/* <Button onClick={() => {setState('uploadSuccess')}}> succ?ess </Button> */}
            {
                (state === 'uploadSuccess') ? 
                <Redirect to={'/'} />
                : < div />
            }
        </div>
    );

}

export default VideoRecord;