import { Button } from '@material-ui/core';
import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import VideoRecorder from 'react-video-recorder'
import { VideoRecordTexts } from '../../assets/ViewTexts/VideoRecordTexts';
import { LanguageContext } from '../../context/LanguageContext';

import storage from '../../firebase';

const VideoRecord = () => {
    let language = useContext(LanguageContext);
    const [state, setState] = useState('beforeStarting');
    // let videoRec;
    const uploadToFirebase = () => {
        const storageRef = storage.ref();

        // refernce to file
        var ref = storageRef.child('msg.txt');
        console.log(storageRef);

        // the file blob
        var message = 'This is my message.';

        // upload
        ref.putString(message).then((snapshot) => {
            console.log('Uploaded a raw string!'); // success msg
        });
    }

    const UploadVideo = () => {
        return (
            <Button
                onClick={() => uploadToFirebase()}>
                {VideoRecordTexts.uploadMsg[language.toString()]}
            </Button>
        );
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
                onRecordingComplete={videoBlob => {
                    // videoRec = videoBlob;
                    setState('afterRecording');
                    console.log('videoBlob', videoBlob);
                    let urlObject = window.URL || window.webkitURL;
                    let url = urlObject.createObjectURL(videoBlob);
                    console.log('blob-url', url);
                }}
            />
            {/* {
                (state === 'afterRecording')
                    ? <UploadVideo />
                    : < div />
            } */}
            <UploadVideo />
        </div>
    );

}

export default VideoRecord;