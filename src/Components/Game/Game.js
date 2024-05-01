import { useState, useEffect } from 'react'
import { loadDailyConfig, loadEmptyConfig, loadSongs } from "../../Services/gameService";
import Clues from "./Clues";
import SongOptions from "./SongOptions";
import Timer from "./Timer";
import Spinner from "../Other/Spinner";

const Game = ({initConfig=null}) => {
    const [cluesLoading, setCluesLoading] = useState(true);
    const [songsLoading, setSongsLoading] = useState(true);

    const [config, setConfig] = useState(loadEmptyConfig);
    const [songs, setSongs] = useState([]);

    const [guesses, setGuesses] = useState(0);
    const [status, setStatus] = useState(0);

    const [songsPage, setSongsPage] = useState(0);
    const [songsFilter, setSongsFilter] = useState("");
    
    useEffect(() => {
        // Use both promises loadDailyConfig and loadSongs to set the game config and guessable songs list
        
        let configPromise;
        if(initConfig != null) {
            configPromise = Promise.resolve(initConfig);
        } else {
            configPromise = loadDailyConfig();
        }

        // For this game, we need to see if the player has made any guesses before the current access and update the config accordingly to their solving progress

        configPromise.then((config) => {
            setConfig(config); 
            setCluesLoading(false); 

            // config.known represents the player's progress in solving the puzzle. We can use this to filter the songs list to only show the ones that are still valid guesses.
            // Initialize page and filter to 0 and "" respectively to load the first page of songs without any extra filtering.
            let songsPromise = loadSongs(config, 0, "");
            
            songsPromise.then((songs) => {
                setSongs(songs);
                setSongsLoading(false);
            });
        });
    }, []);

    let guessSong = (song) => {
        if(status === 0) { // If the game is still in progress...
            // Increment the guesses counter
            setGuesses(guesses => guesses + 1);

            // Compare the guessed song with the correct song and update the puzzle config.known accordinly


            
            // Since we're using fake data currently, all of these if statements will be false

            // If the guess is correct, update the status to 1 (solved)
            if(false) {
                setStatus(1);
            } else if (false) { // Else, if we've learned something new about the song (config.known has changed), reload the songs list to reflect the new constraints
                // Set the songs page back to 0 and clear the text fitler
                // setSongsPage(0);
                // setSongsFilter("");
                // reloadSongs(config.known, songsPage, songsFilter);
            } // Else, the guess was incorrect and we didn't learn anything new, so don't do anything
                
            resetFilters();
        }
    }


    let lastConfig = null;
    let lastSongsPage = null;
    let lastSongsFilter = null;
    let reloadSongs = () => {
        // We don't want to reload the songs list if the clues are still loading or the game is already solved
        if(cluesLoading || status === 1) return;
        // If the config, songsPage, and songsFilter haven't changed, don't reload the songs list
        if(lastConfig === config && lastSongsPage === songsPage && lastSongsFilter === songsFilter) return;
        else {
            lastConfig = config;
            lastSongsPage = songsPage;
            lastSongsFilter = songsFilter;
        }
        setSongsLoading(true);
        loadSongs(config, songsPage, songsFilter).then((newSongs) => {
            setSongs(newSongs);
            setSongsLoading(false);
        });
    }

    let changeSongsPage = (pageChange) => {

        // Can't go below page 0
        if(songsPage + pageChange < 0) return; 
        // Can't go over the last page
        if(songsPage + pageChange > Math.floor(songs.total / 25)) return;

        // console.log(songs, songs., Math.floor(songs.count / 25))

        setSongsPage(prevPage => prevPage + pageChange);
    }

    let changeFilter = (newFilter) => {
        setSongsFilter(newFilter);
    }

    let resetFilters = () => {
        setSongsPage(0);
        setSongsFilter("");
    }

    useEffect(() => {
        reloadSongs();

        console.log(songs)
    }, [songsPage, songsFilter]);

    return (
        <div className="w-[100%]">
            <div className="flex flex-col items-center w-[100%]">
                <div className="self-center flex flex-row items-center justify-around w-[90%] mt-20 h-[10vh] rounded-lg bg-neutral text-center text-neutral-content text-lg">
                    {cluesLoading ? <Spinner/> : (
                        <div>
                            Puzzle Status: <span className="text-accent">{status ? "Solved" : "Unsolved"}</span>
                        </div>
                    )}
                    {cluesLoading ? null : (
                        <div>
                            Guesses: <span className="text-accent">{guesses}</span>
                        </div>
                    )}
                    {cluesLoading ? null : (
                        <div>
                            Time Spent: <Timer hr={0} mn={3} sc={41}/>
                        </div>
                    )}
                </div>
                <div className="flex flex-row items-start align-center justify-between mt-2 w-[90%]">
                    <div className="h-[67vh] w-[50%] mx-2">
                        {cluesLoading ? <Spinner/> : <Clues config={config}/>}
                    </div>
                    <div className="h-[67vh] w-[50%] mx-2">
                        <SongOptions songsLoading={songsLoading} songs={songs} guessSongFunc={guessSong} changePageFunc={changeSongsPage} currentPage={songsPage} changeFilter={changeFilter}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;