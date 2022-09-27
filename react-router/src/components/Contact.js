import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { connect } from "react-redux";

const Contact = (props)=>{

   /* setTimeout(()=>{
        props.history.push('/about')
    },1000)*/
    return(<div>
        <Modal />
            <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
            <Link to="/vahid" className="ui header" >Vahid</Link>
            <p>Contact vahid</p>
            </div>
            <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
            <Link to="/M" className="ui header" >M</Link>
            <p>Contact M</p>
            </div>
        </div>
    )
}
//connect contact to redux store
export default connect()(Contact);