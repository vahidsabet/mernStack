import React from "react";
import {useParams, useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { deleteCard,fetchUsers } from "../actions/cardActions";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} navHook={useNavigate()} />;
}

class Card extends React.Component{
    
    componentDidMount(){
        this.props.fetchUsers()
    }
    onButtonClick = ()=>{        
        let id = this.props.card.id;
        this.props.deleteCard(id)
        this.props.navHook('/contact')
    }
    render() {
        // console.log(this.props);
        const {users} = this.props;
        return (
            users.map(user =>{
                return(
                    <div className="ui raised very padded text container segment" 
                    style={{marginTop:'80px'}}
                    key={user.id}>
                    <h3 className="ui header" >{user.name}</h3>
                    <p>{user.email}</p>
                    <button className="ui primary right floated button"
                    onClick={this.onButtonClick}>
                        Delete
                    </button>
                    </div> 
                )
            })
           
        );
    }
}

const mapStateToProps =(state, ownProps)=>{
    let title = ownProps.params.user;
    // let id = ownProps.params.user.id;
    return { //search through all cards equal to sent user title
        card: state.cards.find(card => card.title === title),
        users: state.users//.find(user => user.id === id)
    }
}

const mapDispatchToProps = (dispatch) =>{
    //send dispatch to rootReducer
    return {
        deleteCard: (id) => {dispatch (deleteCard(id))},
        fetchUsers: () => {dispatch(fetchUsers())}
    }
}

export default withParams(connect(mapStateToProps, mapDispatchToProps)(Card));