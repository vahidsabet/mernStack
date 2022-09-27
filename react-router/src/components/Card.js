import React from "react";
import {useParams} from 'react-router-dom';
// import queryString from 'query-string';
import {connect} from 'react-redux';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Card extends React.Component{
    
    // state = {user:''}

    // componentDidMount(){
    //     // console.log( this.props.params);
    //     // console.log(queryString.parse(this.props.location.search));
    //     const {user} = this.props.params;
    //     this.setState({user});
    // }

    render() {
        // console.log("hi" +this.props);
        // const { user } = this.state;
        const {title, body} = this.props.card;
        return (
            <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
            <h3 className="ui header" >{title}</h3>
            <p>{body}</p>
            
            </div>
        );
    }
}

const mapStateToProps =(state, ownProps)=>{
    // console.log(ownProps);
    let title = ownProps.params.user;
    return { //search through all cards equal to sent user title
        card: state.cards.find(card => card.title === title)
    }
}
export default withParams(connect(mapStateToProps)(Card));