import React from "react";

const hemisphereConfig = {
    Northern: {
        text: 'Northern hemisphere'
    },
    Southern: {
        text: 'Southern hemisphere'
    }
}

const HemispherDisplay = ({latitude}) =>{
    // console.log(latitude);
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text} = hemisphereConfig[hemisphere];

    return(
        <div>
            {text}
        </div>
    )
}

export default HemispherDisplay;
