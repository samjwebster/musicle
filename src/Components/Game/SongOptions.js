import SongEntry from "./SongEntry.js";
import Spinner from "../Other/Spinner";
import { useState, useEffect } from "react";

let guessButton = (onClickFunc) => {
    return (
        <button className="btn m-2 btn-primary text-md btn-md font-bold" onClick={onClickFunc}>Guess</button>
    )
}

const SongOptions = ({songsLoading, songs=null, guessSongFunc=null, changePageFunc=null, currentPage=0, changeFilter=null}) => {
    let incrementPage = () => {
        changePageFunc(1);
    }

    let decrementPage = () => {
        changePageFunc(-1);
    }

    let handleSubmit = () => {
        changeFilter(document.getElementById("songsFilter").value);
    }   

    return (
        <div className="p-2 mx-2 text-center bg-neutral rounded-xl flex flex-col items-center">

            {/* Pagination */}

            <div className="join h-[5vh] mt-1 mb-2 py-0">
                <button className="btn h-[5vh] btn-sm" onClick={() => decrementPage()}>«</button>
                <button className="btn h-[5vh] btn-sm btn-disabled text-neutral-content"><span className="text-neutral-content">Showing <span className="text-secondary">{currentPage*25 + 1}</span> to <span className="text-secondary">{Math.min((currentPage+1)*25, songs.total)}</span> of <span className="text-secondary">{songs.total}</span> songs</span></button>
                <button className="btn h-[5vh] btn-sm" onClick={() => incrementPage()}>»</button>
            </div>
            {/* <div className="max-w-md text-lg my-0 py-0 font-bold h-[5vh]">
                There are <span className="text-secondary">{songsList.length}</span> valid songs to guess from.
            </div> */}

            {/* Text Filter */}
            <div className="flex flex-row h-[5vh] w-[100%] justify-between px-2">
                <input type="text" id="songsFilter" placeholder="Filter by title, album, or artist" className="input input-bordered input-accent rounded-lg h-[5vh] w-full" />
                <input type="submit" value="Filter" onClick={handleSubmit} className="btn h-[5vh] text-md btn-sm btn-accent text-accent-content font-bold ml-2" />
            </div>

            {/* Songs List */}
            {songsLoading ? <Spinner/> : (
                 <div className="overflow-y-auto w-full h-[60vh] rounded-lg">
                    {songs.songs.map((song, index) => {
                        // Alternate bg colors for readibility
                        let bg = (index % 2 === 0) ? "bg-base-300" : "bg-base-100";
                        let classes = "flex flex-row justify-around items-center my-2 rounded-lg w-full " + bg; 
                        return (
                            
                            <div key={index} className={classes}>
                                <SongEntry song={song} />
                                {guessButton(() => guessSongFunc(song))}
                            </div>
                        )
                        })
                    }
                </div>
            )}            
        </div>
    )
}

export default SongOptions;