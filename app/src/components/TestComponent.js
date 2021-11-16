import React,{ useContext } from 'react';

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}

const ThemeContext = React.createContext(themes.light)

function TestComponent(){
    
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar/>
        </ThemeContext.Provider>
    )

}

export default TestComponent

function Toolbar(){
    return(
        <div>
            <ThemedButton/>
        </div>
    )
}

function ThemedButton(){
    const theme = useContext(ThemeContext)
    return(
        <button 
        style={{background: theme.background, color: theme.foreground}}
        >
            wow, such style
        </button>
    )
}