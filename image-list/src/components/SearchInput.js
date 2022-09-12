import React from "react";

class SearchInput extends React.Component {
    state = {entry:''}
    // onInputChange(event){
    //     console.log(event.target.value);
    // }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" action="">
                    <div className="field">
                        <div className="ui massive icon input">
                <input type="text" 
                placeholder="سرچ" 
                onChange={(event)=> this.setState({entry:event.target.value})}/>
                {/* onChange={this.onInputChange}/> */}
                <i className="search icon"></i>
                    </div>
                    </div>
                    </form>
                    
            </div>
        )
    }
}

export default SearchInput;