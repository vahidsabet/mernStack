import React from "react";
import ReactDom from "react-dom";


// const App = () =>{
  
//     return(
//         <div>Hello</div>
//     )
// }

class App extends React.Component{
    //change default constructur behaviour in Component class
    constructor(props){
        super(props)
        this.state = { latitude: null, errorMessage:''}

        window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                //update state
                this.setState({latitude:position.coords.latitude})
            },
            (error) => {
                this.setState({ errorMessage:error.message})
            }
        );
    }

    render(){
        
        return(
        <div>
            {this.state.latitude}
            {this.state.errorMessage}
        </div>
        )
    }
}
ReactDom.render(
    <App />,
    document.querySelector('#root')
)