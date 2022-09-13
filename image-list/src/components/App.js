import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";

class App extends React.Component {


    state = { images: [] }

    //callback method and  <SearchInput onSearchSubmit is props pass from SearchInput
    onSearchSubmit = async (entry) => {
        //console.log(entry);
        const response = await axios.get(`https://pixabay.com/api/?key=29892836-f8039ee2d429fb39538e5e8e3&q=${entry}&image_type=photo&pretty=true`)
        //console.log(response.data.hits);
        this.setState({images:response.data.hits})
    }
    render(){
         return (
            <div className="ui container" style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                We have {this.state.images.length} images
            </div>
        )
    }
}

export default App;
