import React from "react";
import {useParams, useNavigate } from 'react-router-dom';

// import queryString from 'query-string';
import {connect} from 'react-redux';
function withParams(Component) {
    
    return props => <Component {...props} params={useParams()} navHook={useNavigate()} />;
}

class Card extends React.Component{
    
    onButtonClick = ()=>{        
        let id = this.props.card.id;
        this.props.deleteCard(id)
        this.props.navHook('/contact')
    }
    render() {
        console.log(this.props);
        const {title, body} = this.props.card;
        return (
            <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
            <h3 className="ui header" >{title}</h3>
            <p>{body}</p>
            <button className="ui primary right floated button"
            onClick={this.onButtonClick}>
                Delete
            </button>
            </div>
        );
    }
}

const mapStateToProps =(state, ownProps)=>{
    let title = ownProps.params.user;
    return { //search through all cards equal to sent user title
        card: state.cards.find(card => card.title === title)
    }
}

const mapDispatchToProps = (dispatch) =>{
    //send dispatch to rootReducer
    return {
        deleteCard: (id) => {dispatch ({type: 'DELETE_CARD', id: id})}
    }
}

export default withParams(connect(mapStateToProps, mapDispatchToProps)(Card));