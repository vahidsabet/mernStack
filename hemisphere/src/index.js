import React from "react";
import ReactDom from "react-dom";
import HemispherDisplay from "./HemisphereDisplay";


class App extends React.Component{


    //change default constructur behaviour in Component class

    state = { latitude: null, errorMessage:''}

    //load necessary data
    componentDidMount(){
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

    componentDidUpdate(){
        console.log("componentDidUpdate");;
    }

    render(){
        if(this.state.errorMessage && !this.state.latitude){
            return <div>{this.state.errorMessage} </div>
        }else if(!this.state.errorMessage && this.state.latitude){
            return <div> <HemispherDisplay latitude={this.state.latitude} /> </div>
        }else{
            return <div>Loading....</div>
        }
    }
}
ReactDom.render(
    <App />,
    document.querySelector('#root')
)