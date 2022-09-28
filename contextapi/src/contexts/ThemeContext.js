import React, { createContext } from 'react';

//when we create a context, we also create a provider to use in components to attach props
export const ThemeContext = createContext();

//Context provides a way to pass data through the component tree without having to pass props down manually at every level.

//share data between component
class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            background: '#d8ddf1'
        },
        darkTheme:{
            text: '#fff',
            background: '#5c5c5c'
        }
    };

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;