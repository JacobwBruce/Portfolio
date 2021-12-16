import React from 'react';

const GlobalContext = React.createContext({
    darkMode: false,
    setDarkMode: (boolean) => {},
});

export default GlobalContext;
