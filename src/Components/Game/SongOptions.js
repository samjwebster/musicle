let SongEntry = ({song}) => {
    return (
        <div tabindex="0" className="collapse collapse-arrow bg-neutral mr-4">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
                <div className="flex flex-row justify-between ">
                    <div className="flex flex-col rounded-lg w-[50%]">
                        <div className="text-left text-xl text-neutral-content font-extrabold">
                            Title: {song.title}
                        </div>
                        <div className="text-left text-lg text-neutral-content font-bold w-full">
                            Album: {song.album.album}
                        </div>
                        <div className="text-left text-lg text-neutral-content font-bold w-full">
                            Release Date: {song.release_date}
                        </div>
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <div className="text-left text-lg text-neutral-content font-bold">
                            Artists:
                        </div>
                        <div className="overflow-y-auto">
                            {song.artists.map((artist, index) => (
                                <div key={index} className="text-left bg-neutral p-2 rounded-md text-md text-neutral-content font-bold">
                                    Name: {artist.artist}
                                    <br/>
                                    Genres:
                                    
                                    {artist.genres.map((genre, index) => (
                                        <div key={index} className="badge mx-1 badge-secondary">
                                            {genre}
                                        </div>
                                    ))}                        
                                </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="collapse-content"> 
            <div className="w-full text-neutral-content">
                    <div className="font-bold text-lg">
                        Audio Features:
                    </div>
                    <div className="flex flex-row justify-evenly">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Danceability</th>
                                <th>{song.danceability}</th>
                            </tr>
                            <tr>
                                <th>Energy</th>
                                <th>{song.energy}</th>
                            </tr>
                            <tr>
                                <th>Loudness</th>
                                <th>{song.loudness} dB</th>
                            </tr>
                            <tr>   
                                <th>Mode</th>
                                <th>{(song.mode === 1 ? "Major" : "Minor")}</th>
                            </tr>
                            <tr>   
                                <th>Speechiness</th>
                                <th>{song.speechiness}</th>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table">
                        <tbody>
                            <tr>   
                                <th>Acousticness</th>
                                <th>{song.acousticness}</th>
                            </tr>
                            <tr>   
                                <th>Instrumentalness</th>
                                <th>{song.instrumentalness}</th>
                            </tr>
                            <tr>
                                <th>Liveness</th>
                                <th>{song.liveness}</th>
                            </tr>
                            <tr>
                                <th>Valence</th>
                                <th>{song.valence}</th>
                            </tr>
                            <tr>
                                <th>Tempo</th>
                                <th>{song.tempo} BPM</th>
                            </tr>
                        </tbody>
                    </table>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

let guessButton = (onClickFunc) => {
    return (
        <button class="btn btn-primary text-xl btn-lg font-bold" onClick={onClickFunc}>Guess</button>
    )
}

const SongOptions = ({songsList = []}) => {
    return (
        <div className="hero mt-4">
            <div className="hero-content text-center bg-neutral rounded-xl flex flex-col w-[80vw]">
                {/* <div className="max-w-md text-3xl text-primary font-extrabold text-left my-0 py-0">
                    Guess Options
                </div> */}
                <div className="max-w-md text-lg my-0 py-0 font-bold">
                    There are <span className="text-secondary">{songsList.length}</span> valid songs to guess from.
                </div>

                {songsList.map((song, index) => {
                    return (
                        <div key={index} className="flex flex-row justify-around items-center glass bg-neutral p-2 rounded-lg w-full">
                            <SongEntry song={song} />
                            {guessButton(() => {console.log("Guessing song: ", song.title)})}
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

export default SongOptions;