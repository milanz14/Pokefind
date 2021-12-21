import axios from "axios";
import React, { useEffect, useState } from "react";

const PokeModal = (props) => {
    const { pokemonID, url, name } = props;
    const [pokeData, setPokeData] = useState({});

    useEffect(() => {
        const fetch = async () => {
            await axios
                .get(url)
                .then((res) => {
                    console.log(res.data);
                    setPokeData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetch();
    }, []);

    const logPokeData = () => {
        console.log(pokeData);
        console.log(pokeData.sprites.front_default);
        console.log(url);
    };

    return (
        <div>
            <h1>{name}</h1>
            <h2>{pokemonID}</h2>
            <h2>{url}</h2>
            <button onClick={logPokeData}>Click Me</button>
            {/* <img src={pokeData.sprites.front_default || null} /> */}
        </div>
    );
};

export default PokeModal;
