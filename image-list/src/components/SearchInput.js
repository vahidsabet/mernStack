import React from "react";

class SearchInput extends React.Component {
    state = {entry:''}

    // constructor(){ //changeably you can use arrow function  = (event) => for on onFormSubmit instead of onFormSubmit (event){
    //     super();
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }
    // onInputChange(event){
    //     console.log(event.target.value);
    // }
    onFormSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.entry);
    }
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" action="">
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