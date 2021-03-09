import React from "react";
import MicRecorder from 'mic-recorder-to-mp3';
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@material-ui/core";

const AudioRecord = () => {
    const Mp3Recorder = new MicRecorder({ bitRate: 128 });

    const [state, setState] = useState({
        isRecording: false,
        blobURL: '',
        isBlocked: false,
    });

    useEffect(() => {
        // Navigator.getUserMedia({ audio: true },
        //     () => {
        //         console.log('Permission Granted');
        //         setState({ isBlocked: false });
        //     },
        //     () => {
        //         console.log('Permission Denied');
        //         setState({ isBlocked: true })
        //     },
        // );
    });

    const start = () => {
        if (state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    setState({ isRecording: true });
                }).catch((e) => console.error(e));
        }
    };

    const stop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                setState({ blobURL, isRecording: false });
            }).catch((e) => console.log(e));
    };
    return (
        <div>
            <Button onClick={() => start()} disabled={state.isRecording}>
                Record
            </Button>

            <Button onClick={() => stop()} disabled={!state.isRecording}>
                Stop
            </Button>
            <audio src={state.blobURL} controls="controls" />
        </div>
    );
}

export default AudioRecord;