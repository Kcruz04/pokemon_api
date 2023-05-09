import React,{useState} from 'react'

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState([])

    const fetchData = () =>{
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => {
            return response.json()
        })
        .then((response) =>{
            console.log(response)
            setPokemon(response)

        })
        .catch((error) =>{
            console.log("this is our catch error", error)
        })
    }

    return (
        <div>
            <h1>Poke-List</h1>
            <button type="submit" onClick={fetchData} className="btn btn-primary">Fetch Pokemon</button>
            {
                pokemon.map((poke, i) =>{
                    return(
                        <div key={i}>
                            <h3>{poke.name}</h3>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default FetchPokemon