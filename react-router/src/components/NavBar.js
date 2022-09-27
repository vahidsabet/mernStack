import React from "react";
import { Link, NavLink   } from "react-router-dom";

//use useNavigate instead of props.history for redirect
const NavBar = () => {
    // let navigate = useNavigate();
    // setTimeout(()=>{
    //     navigate('/about')
    // },3000)

    return(
        <nav className="ui raised very padded segment">
            <a href="/avs" className="ui teal inverted segment">Gloria</a>
            <div className="ui right floated header">
                <button className="ui button">
                    <Link to="/">Home</Link>
                </button>
                <button className="ui button">
                    <NavLink to="/about">about</NavLink>
                </button>
                <button className="ui button">
                    <Link to="/contact">Contact</Link>
                </button>
            </div>

        </nav>
    )
}

export default (NavBar);