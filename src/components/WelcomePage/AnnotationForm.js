import { React, useContext } from "react";

import { LanguageContext } from "../../context/LanguageContext";

const WelcomePage = () => {
    let language = useContext(LanguageContext);
    return (
        <div>
            fill the form y'all
        </div>
    );
}

export default WelcomePage;