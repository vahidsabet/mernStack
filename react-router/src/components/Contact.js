import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Contact = ({cards})=>{
    return(<div>
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