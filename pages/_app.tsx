import '../styles/globals.css';
import { useEffect, useState } from 'react';
import GlobalContext from '../utils/GlobalContext';
import Aos from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
    const [state, setState] = useState({
        darkMode: false,
        setDarkMode,
    });

    useEffect(() => {
        setState({
            ...state,
            darkMode: JSON.parse(window.localStorage.getItem('darkTheme')),
        });

        Aos.init({ duration: 1000 });
    }, []);

    function setDarkMode(flag: boolean) {
        //set the theme of the app
        setState({ ...state, darkMode: flag });
        window.localStorage.setItem('darkTheme', JSON.stringify(flag));
    }

    return (
        <GlobalContext.Provider value={state}>
            <Component {...pageProps} />
        </GlobalContext.Provider>
    );
}

export default MyApp;
