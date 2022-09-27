import React from "react";
import { Link } from "react-router-dom";
// import Modal from "./Modal";
import { connect } from "react-redux";

const Contact = ({cards})=>{
    //console.log(props.cards);
   /* setTimeout(()=>{
        props.history.push('/about')
    },1000)*/
    return(<div>
        {/* <Modal /> */}
            {
                cards.map(card => {
                    return(
                        <div className="ui raised very padded text container segment"
                         style={{marginTop:'80px'}}
                         key={card.id}
                         >
                            <Link to={`/${card.title}`} className="ui header" >{card.title}</Link>
                            <p>{card.body}</p>
                        </div>
                    )
                })
            }
            {/* <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
            <Link to="/M" className="ui header" >M</Link>
            <p>Contact M</p>
            </div> */}
        </div>
    )
}

//Connect to redux via function 
const mapStateToProps = (state) => {
    return {
        cards: state.cards  //get cards from initialState in reducer
    }
};

//connect contact to redux store
export default connect(mapStateToProps)(Contact);