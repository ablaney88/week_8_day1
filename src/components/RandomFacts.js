import React from "react";

const RandomFact = ({fact}) => {
  
    if(!fact){
        return null
    }

    return(

        <h3>Random Fact: {fact.id.text}</h3>
    )
}

export default RandomFact