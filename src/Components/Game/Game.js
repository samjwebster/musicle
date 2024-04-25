import { useState, useEffect } from 'react'
import { loadDailyConfig, loadEmptyConfig, loadSongs } from "../../Services/gameService";
import Clues from "./Clues";
import SongOptions from "./SongOptions";
import Spinner from "../Other/Spinner";

const Game = ({gameConfig}) => {
    const [loading, setLoading] = useState(true);
    const [config, setConfig] = useState(loadEmptyConfig);
    const [songs, setSongs] = useState([]);
    
    useEffect(() => {
        // Use both promises loadDailyConfig and loadSongs to set the game config and guessable songs list
        
        let configPromise;
        if(gameConfig != null) {
            configPromise = Promise.resolve(gameConfig);
        } else {
            configPromise = loadDailyConfig();
        }
        let songsPromise = loadSongs();

        Promise.all([configPromise, songsPromise]).then((values) => {
            setConfig(values[0]);
            setSongs(values[1]);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading ? 
                <div className="flex justify-center mt-24">
                    <Spinner />
                </div> 
                :
                <div>
                    <Clues config={config}/>
                    <SongOptions songsList={songs}/>
                </div>
            }
        </div>
    );
}

export default Game;