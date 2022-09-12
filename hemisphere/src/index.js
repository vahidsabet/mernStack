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
        if(this.state.errorMessage && !this.state.latitude){
            return <div>{this.state.errorMessage} </div>
        }else if(!this.state.errorMessage && this.state.latitude){
            return <div>{this.state.latitude} </div>
        }else{
            return <div>Loading....</div>
        }
    }
}
ReactDom.render(
    <App />,
    document.querySelector('#root')
)