import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends React.Component {
    //access to all data in the context. consume ThemeContext in contextType:a way to use context outside of render method. 
    // static contextType = ThemeContext;

    render(){
        
        return (
            <ThemeContext.Consumer>
            {(context)=>{
                const { isDarkTheme, darkTheme, lightTheme} = context; //this.context reach out from contextType object
                const theme = isDarkTheme ? darkTheme : lightTheme;
                return(
                    <nav style={{ background: theme.background,color:theme.text, height: "120px" }}>
                        <h2 className='ui centered header' style={{ textAlign: 'center'}}>
                            Ayeezh bot
                        </h2>
                        <div className='ui three buttons'>
                            <button className='ui button'>Overview</button>
                            <button className='ui button'>Contact</button>
                            <button className='ui button'>Support</button>
                        </div>
                    </nav>
                )
            }}
            </ThemeContext.Consumer>
            
        )
    }
}

export default Navbar;