import { Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
// import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'
import { VideoRecordTexts } from '../../assets/ViewTexts/VideoRecordTexts';
import { LanguageContext } from '../../context/LanguageContext';

const VideoRecord = () => {
    let language = useContext(LanguageContext);
    const [state, setState] = useState('beforeStarting');
    let videoRec;
    const UploadVideo = () => {
        return (
            <Button
            onClick = {() => console.log(videoRec)}> 
                {VideoRecordTexts.uploadMsg[language.toString()]}
            </Button>
        );
    }

    return (
        <div>
            <h4>
                {VideoRecordTexts.header[state.toString()][language.toString()]}
            </h4>
            <VideoRecorder
                renderDisconnectedView={() => console.log('not connected')}
                onRecordingComplete={videoBlob => {
                    videoRec = videoBlob;
                    setState('afterRecording');
                    console.log('videoBlob', videoBlob);
                }}
            />
            {
                (state === 'afterRecording')
                    ? <UploadVideo />
                    : < div />
            }
        </div>
    );

}

export default VideoRecord;