import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Sidebar from "./components/Sidebar";
import PokemonFetch from "./components/PokemonFetch";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            {/* <Sidebar />
            <Jumbotron /> */}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/pokemon" element={<PokemonFetch />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
