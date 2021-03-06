import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import PokemonFetch from "./components/PokemonFetch";
import TypesFetch from "./components/TypesFetch";
import Pokedex from "./components/Pokedex";
import Register from "./components/Register";
import Login from "./components/Login";
import { LoginContext } from "./helpers/LoginContext";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/pokemon" element={<PokemonFetch />} />
                    <Route path="/pokemon/types" element={<TypesFetch />} />
                    <Route path="/pokemon/pokedex" element={<Pokedex />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </LoginContext.Provider>
    );
}

export default App;
