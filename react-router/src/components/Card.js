import React from "react";
import {useParams} from 'react-router-dom';
// import queryString from 'query-string';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Card extends React.Component{
    
    state = {user:''}

    componentDidMount(){
        // console.log( this.props.params);
        // console.log(queryString.parse(this.props.location.search));
        const {user} = this.props.params;
        this.setState({user});
    }

    render() {
        // console.log("hi" +this.props);
        const { user } = this.state;
        return (
            <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
            <h3 className="ui header" >{user}</h3>
            
            </div>
        );
    }
}


export default withParams(Card);