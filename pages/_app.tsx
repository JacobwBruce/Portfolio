import '../styles/globals.css';
import { useState } from 'react';
import GlobalContext from '../utils/GlobalContext';

function MyApp({ Component, pageProps }) {
    const [state, setState] = useState({
        darkMode: false,
        setDarkMode,
    });

    function setDarkMode(flag: boolean) {
        //set the theme of the app
        setState({ ...state, darkMode: flag });
    }

    return (
        <GlobalContext.Provider value={state}>
            <Component {...pageProps} />
        </GlobalContext.Provider>
    );
}

export default MyApp;
