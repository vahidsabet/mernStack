import React from "react";
import ReactDom from "react-dom";


// const App = () =>{
  
//     return(
//         <div>Hello</div>
//     )
// }

class App extends React.Component{
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=> console.log(position),
            (error) => console.log(error)
        );
        return(
        <div>
hi
        </div>
        )
    }
}
ReactDom.render(
    <App />,
    document.querySelector('#root')
)