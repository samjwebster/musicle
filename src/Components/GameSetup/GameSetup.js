import { useState, useEffect } from 'react';

const genres = ["acoustic", "afrobeat", "alt-rock", "alternative", "ambient", "anime", "black-metal", "bluegrass", "blues", "bossanova", "brazil", "breakbeat", "british", "cantopop", "chicago-house", "children", "chill", "classical", "club", "comedy", "country", "dance", "dancehall", "death-metal", "deep-house", "detroit-techno", "disco", "disney", "drum-and-bass", "dub", "dubstep", "edm", "electro", "electronic", "emo", "folk", "forro", "french", "funk", "garage", "german", "gospel", "goth", "grindcore", "groove", "grunge", "guitar", "happy", "hard-rock", "hardcore", "hardstyle", "heavy-metal", "hip-hop", "holidays", "honky-tonk", "house", "idm", "indian", "indie", "indie-pop", "industrial", "iranian", "j-dance", "j-idol", "j-pop", "j-rock", "jazz", "k-pop", "kids", "latin", "latino", "malay", "mandopop", "metal", "metal-misc", "metalcore", "minimal-techno", "movies", "mpb", "new-age", "new-release", "opera", "pagode", "party", "philippines-opm", "piano", "pop", "pop-film", "post-dubstep", "power-pop", "progressive-house", "psych-rock", "punk", "punk-rock", "r-n-b", "rainy-day", "reggae", "reggaeton", "road-trip", "rock", "rock-n-roll", "rockabilly", "romance", "sad", "salsa", "samba", "sertanejo", "show-tunes", "singer-songwriter", "ska", "sleep", "songwriter", "soul", "soundtracks", "spanish", "study", "summer", "swedish", "synth-pop", "tango", "techno", "trance", "trip-hop", "turkish", "work-out", "world-music"];

const GameSetup = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);

    const addGenre = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
    }

    const removeGenre = (genre) => {   
        setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    }

    const genreSelected = (genre) => {  
        return selectedGenres.includes(genre);
    }

    return (
        <div className="flex flex-col items-center w-[100%] mt-20">
            <div className="glass rounded-xl p-4 bg-neutral w-[80%] flex flex-col items-center">
                {/* About Setup */}
                <details className="collapse collapse-plus mt-2 bg-secondary text-secondary-content rounded-xl w-full glass">
                    <summary className="collapse-title text-lg font-bold">About Game Setup</summary>
                    <div className="collapse-content "> 
                        <p>When creating a game of Musicle, a random song is chosen from our database as the hidden song to be discovered. By configuring the attribute filters below, you can constrain the hidden song to be within your defined boundaries. The 'Release Year' section allows you to define a range of years in which the hidden song must have been released in. The 'Genres' section allows you to select any genres you wish to limit the hidden song to being within.</p>
                    </div>
                </details>

                {/* Game Setup */}
                {/* Filters: Genre, Release Date */}
                <div className="mt-2 p-2 w-full bg-secondary-content text-secondary glass rounded-xl">
                    <span className="text-lg font-bold m-2">
                        Release Year
                    </span>

                    <div className="flex flex-row w-full justify-center align-center">
                        <input id="minYearInput" type="number" min="1928" max="2020" placeholder="1928" className="text-center px-2 mx-2 input w-[40%] max-w-xs" />
                        <input id="maxYearInput" type="number" min="1928" max="2020" placeholder="2024" className="text-center px-2 mx-2 input w-[40%] max-w-xs" />
                    </div>
                </div>

                <div className="mt-2 p-2 w-full bg-secondary-content text-secondary glass rounded-xl">
                    <span className="text-lg font-bold m-2">
                        Genres
                    </span>

                    <div>
                        Key: <div className="badge badge-accent">Selected</div>, <div className="badge badge-neutral">Not Selected</div>

                    </div>


                    <div className="mt-4 flex flex-row flex-wrap w-full justify-center align-center">
                        {genres.map((genre) => (
                            <div key={genre} className={`mx-1 my-[2px] cursor-pointer badge ${genreSelected(genre) ? 'badge-accent' : 'badge-neutral'}`} onClick={() => genreSelected(genre) ? removeGenre(genre) : addGenre(genre)}>
                                {genre}
                            </div>
                        ))}
                    </div>
                </div>
                

                <button className="btn btn-primary mt-4">Start Custom Game</button>
            </div>
        </div>
    )

}

export default GameSetup;