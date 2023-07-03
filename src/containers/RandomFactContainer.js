import React, {useState, useEffect} from 'react'
import FavouriteFacts from '../components/FavouriteFacts'

const RandomFactsContainer = () => {
  
    const [fact, setFact] = useState("")
    const [favouriteFacts, setFavouriteFacts] = useState([])
    // const [randomFactid, setRandomFactid] = useState("")

    const getFacts =() => {
      fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then(res => res.json())
      .then(factsData => setFact(factsData))
    }

    const saveFact = () => {
        let newFavourites = [...favouriteFacts]
        newFavourites.push(fact)
        setFavouriteFacts(newFavourites);
    }

    useEffect(() => {
      getFacts()
    }, [])


    return (
        <>
        <h1>Here are some random facts</h1>
        <p>{fact.text}</p>
        <button onClick={getFacts}>Get New Fact</button>
        <button onClick={saveFact}>Save Fact</button>

        <h1>Favourite Facts</h1>
        <FavouriteFacts favourites={favouriteFacts}/>
        </>
    )

}

export default RandomFactsContainer;