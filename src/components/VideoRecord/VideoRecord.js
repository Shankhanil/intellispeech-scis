import React, { useState, useContext, useEffect, Suspense } from 'react'
import { Link, Redirect } from "react-router-dom";

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
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '80vw',
        // height: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

        'align-items': 'center',
        'min-height': '30vh',
    },
    avatar: {
        display: 'flex',
        'justify-content': 'center',
        // 'font-size': '80',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    warning: {
        'color': 'red',
    }
}));

const VideoRecord = () => {
    // get the UI language
    let language = useContext(LanguageContext);
    const classes = useStyles();

    // video recording state
    const [state, setState] = useState('beforeStarting');

    // reference to firebase storage
    const storageRef = storage.ref();

    // modal definition
    const uploadingModal = (
        <div
            className={classes.paper}>
            <h2 id="simple-modal-title">
                {VideoRecordTexts.afterRecording[language.toString()]}
            </h2>
            <h3 id="simple-modal-title">
                {VideoRecordTexts.uploadMsg1[language.toString()]}
            </h3>
            <h4 id="simple-modal-title">
                {VideoRecordTexts.uploadMsg2[language.toString()]}
            </h4>
            <h4 className={classes.warning}>
                {VideoRecordTexts.warning[language.toString()]}
            </h4>
            {/* <Button onClick={() => { setState('uploadSuccess') }}> Record </Button> */}
        </div>
    );

    const annotation = {
        uid: localStorage.getItem('uid'),
        ageVal: localStorage.getItem('ageVal'),
        genderVal: localStorage.getItem('genderVal'),
    };
    const [uploadState, setUploadState] = useState(false);

    // hooks
    useEffect(() => {
        if (state === 'afterRecording') {
            setUploadState(true);
        }
    }, [state]);


    // function to execute after recording is complete
    const recoringComplete = (videoBlob) => {
        // update the state
        setState('afterRecording');
        /**
         * create a reference to the new file
         * Generate filename for each person. 
         */
        const videoFile = `${annotation.uid}.mp4`;
        const annotationFile = `${annotation.uid}_annotation.txt`;

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
            <Suspense fallback={<h4> Loading.....</h4>}>

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
                {/* <Button onClick={() => { setState('afterRecording') }}> Record </Button> */}
                {/* <h1> {uploadState.toString()} </h1> */}
                <Modal
                    open={uploadState}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {uploadingModal}
                </Modal>
                {
                    (state === 'uploadSuccess') ?
                        <Redirect to={'/'} />
                        : < div />
                }
            </Suspense>
        </div>
    );
}

export default VideoRecord;