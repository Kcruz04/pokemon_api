import React, {useState} from 'react'
import axios from 'axios'

const AxiosPokemon = () => {
    const [pokemon, setPokemon] = useState([])

    const fetchData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")

        .then((response) => {
            console.log(response.data.data.results)
            setPokemon(response)
        })

        .catch((error) => {
            console.log("this is our catch error", error)
        })
    }
    return (
        <div>
            <h1>Axios Pokemon</h1>
            <button onClick={fetchData} className="btn btn-primary">Fetch Pokemon</button><br />
            {
                pokemon.map((poke, i) => {
                    return(
                        <div >
                            <h3>{poke.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AxiosPokemon