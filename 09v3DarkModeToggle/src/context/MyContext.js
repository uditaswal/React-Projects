import { createContext } from 'react';

const ThemeContext = createContext({

    theme: "light",
    darkMode: () => { },
    lightMode: () => { }


})

export default ThemeContext;