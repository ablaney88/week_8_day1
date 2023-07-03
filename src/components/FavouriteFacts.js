
import React from "react";

const FavouriteFacts = ({favourites}) => {

    let elements = favourites.map((fact, index) => {
        return <p key={index}>{fact.text}</p>
    })

    return(
        <>

        {elements}
        </>

    )

}

export default FavouriteFacts