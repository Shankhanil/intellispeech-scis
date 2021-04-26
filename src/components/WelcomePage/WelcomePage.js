import {
    // Avatar, 
    Button
} from '@material-ui/core';
import { React, Suspense, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { WelcomePageTexts } from '../../assets/ViewTexts/WelcomePageTexts';
import { LanguageContext } from '../../context/LanguageContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import csAvatar from "../../assets/static/avatar/cs.jpg";
// import sgAvatar from "../../assets/static/avatar/sg.jpg";

const useStyles = makeStyles((theme) => ({
    paper: {
        width: '80vw',
        'min-height': "50vh",
        // height: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        'align-items': 'center',

    },
    avatar: {
        display: 'flex',
        'justify-content': 'center',
        // 'font-size': '80',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    instructions: {
        display: 'flex',
        // flexDirections: 'column',
        'flex-direction': 'column',
        'align-items': 'flex-start',
        'justify-content': 'flex-start',
    }
}));

const WelcomePage = () => {
    let language = useContext(LanguageContext);
    const classes = useStyles();
    // const [modalStyle] = React.useState(getModalStyle);
    const [creditsOpen, setCreditsOpen] = useState(false);
    const [purposeOpen, setPurposeOpen] = useState(true);
    const [instructionsOpen, setInstructionsOpen] = useState(true);
    const [policyOpen, setPolicyOpen] = useState(false);

    let instructionListDiv = [];
    for (let i in WelcomePageTexts.instructions) {
        instructionListDiv.push(
            <li key={Number(i)}>
                {
                    WelcomePageTexts.instructions[
                    i
                    ][
                    language.toString()
                    ]
                }
            </li>
        );
    }

    const creditsBody = (
        <div>
            <Suspense fallback={<h5> Loading.....</h5>}>
                <div
                    className={classes.paper}>
                    <h2 id="simple-modal-title">
                        {WelcomePageTexts.creditsModalHeader[language.toString()]}
                    </h2>
                    <p id="simple-modal-description">
                        {WelcomePageTexts.credits[language.toString()]}
                    </p>
                    {/* <Suspense fallback={<h5> Loading.....</h5>}>
                        <div className={classes.avatar}>
                            <Avatar alt="SG" src={sgAvatar} />
                            <Avatar alt="CS" src={csAvatar} />
                        </div>
                    </Suspense> */}
                    <Button onClick={() => setCreditsOpen(false)}>
                        {WelcomePageTexts.close[language.toString()]}
                    </Button>
                </div>
            </Suspense >
        </div >
    );

    const purposeBody = (
        <Suspense fallback={<h5> Loading.....</h5>}>

            <div className={classes.paper}>
                <h2 id="simple-modal-title">
                    {WelcomePageTexts.ourPurposeModalHeader[language.toString()]}
                </h2>
                <p id="simple-modal-description">
                    {WelcomePageTexts.ourPurpose[language.toString()]}
                </p>
                <Button onClick={() => setPurposeOpen(false)}>
                    {WelcomePageTexts.close[language.toString()]}
                </Button>
            </div>
        </Suspense>
    );
    const instructionsBody = (
        <Suspense fallback={<h5> Loading.....</h5>}>
            <div className={classes.paper}>
                <h1> {WelcomePageTexts.instructionsBtn[language.toString()]} </h1>
                <ul className={classes.instructions}> {instructionListDiv} </ul>
                <Button onClick={() => setInstructionsOpen(false)}>
                    {WelcomePageTexts.close[language.toString()]}
                </Button>
            </div>
        </Suspense>
    );

    const policyBody = (
        <Suspense fallback={<h5> Loading.....</h5>}>
            <div className={classes.paper}>
                {WelcomePageTexts.policyBody[language.toString()]}
                <Button onClick={() => setPolicyOpen(false)}>
                    {WelcomePageTexts.close[language.toString()]}
                </Button>
            </div>
        </Suspense>
    );

    return (
        <div>
            <div className="welcome-msg">
                <h1>{WelcomePageTexts.welcomeMsg[language.toString()]}</h1>
                <h4>{WelcomePageTexts.requestMsg[language.toString()]}</h4>
            </div>
            <div className="login-btn">
                <Modal
                    open={instructionsOpen}
                    onClose={() => setInstructionsOpen(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {instructionsBody}
                </Modal>
                <Button onClick={() => setPurposeOpen(true)}>
                    {WelcomePageTexts.ourPurposeBtnTxt[language.toString()]}
                </Button>
                <Modal
                    open={purposeOpen}
                    onClose={() => setPurposeOpen(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {purposeBody}
                </Modal>

                <Button onClick={() => setCreditsOpen(true)}>
                    {WelcomePageTexts.creditsBtnTxt[language.toString()]}
                </Button>
                <Modal
                    open={creditsOpen}
                    onClose={() => setCreditsOpen(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {creditsBody}
                </Modal>
                {/* Instructions */}
                <Button onClick={() => setInstructionsOpen(true)}>
                    {WelcomePageTexts.instructionsBtn[language.toString()]}
                </Button>

                <Button onClick={() => setPolicyOpen(true)}>
                    {WelcomePageTexts.policyBtn[language.toString()]}
                </Button>
                <Modal
                    open={policyOpen}
                    onClose={() => setPolicyOpen(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {policyBody}
                </Modal>

            </div>
            <div className="login-btn">
                {/* Video contribution button */}
                <Link to='/vform'>
                    <Button>
                        {WelcomePageTexts.vdoContribute[language.toString()]}
                    </Button>
                </Link>
                {/* Audio contribution button */}
                <Button disabled>
                    {WelcomePageTexts.audioContribute[language.toString()]}
                </Button>
            </div>
        </div>
    );
}

export default WelcomePage;