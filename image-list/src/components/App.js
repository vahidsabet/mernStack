import React from "react";
import SearchInput from "./SearchInput";

class App extends React.Component {

    //callback method and  <SearchInput onSearchSubmit is props pass from SearchInput
    onSearchSubmit = (entry) => {
        console.log(entry);
    }
    render(){
         return (
            <div className="ui container" style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}


export default App;
