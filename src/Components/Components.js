import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import TileBackground from './TileBackground/TileBackground';
import Home from './Home/Home';
import About from './About/About';
import Leaderboards from './Leaderboards/Leaderboards';
import Game from './Game/Game';
import GameSetup from './GameSetup/GameSetup';
import AuthParent from "./Auth/AuthParent";
import Profile from "./Profile/Profile";
import { ProtectedRouteAuth } from "../Services/protectedRouteService";

export default function Components() {
    let protectedProfileElement = <ProtectedRouteAuth path="/register" element={Profile}/>
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/leaderboards" element={<Leaderboards />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/setup" element={<GameSetup />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<AuthParent register={false} />} />
                    <Route path="/register" element={<AuthParent register={true} />} />
                    <Route path="/profile" element={protectedProfileElement} />
                </Routes> 
            </Router>
            <TileBackground />
        </div>
    )
}