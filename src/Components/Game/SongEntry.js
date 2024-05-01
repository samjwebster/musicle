import musicnote from '../../Assets/musicnote.svg';
import album from '../../Assets/album.svg';
import release_date from '../../Assets/release_date.svg';

const SongEntry = ({song}) => {
    let titleSvg = (
        <img src={musicnote} alt="" style={{ width: '14px', height: '14px', marginRight: '8px', filter: "brightness(0) saturate(100%) invert(60%) sepia(28%) saturate(6402%) hue-rotate(103deg) brightness(99%) contrast(77%)" }} />
    );

    let albumSvg = (
        <img src={album} alt="" style={{ width: '14px', height: '14px', marginRight: '8px', filter: "brightness(0) saturate(100%) invert(60%) sepia(28%) saturate(6402%) hue-rotate(103deg) brightness(99%) contrast(77%)" }} />
    );

    let releaseDateSvg = (
        <img src={release_date} alt="" style={{ width: '14px', height: '14px', marginRight: '8px', filter: "brightness(0) saturate(100%) invert(60%) sepia(28%) saturate(6402%) hue-rotate(103deg) brightness(99%) contrast(77%)" }} />
    );

    return (
        <div tabIndex="0" className="collapse collapse-arrow mr-2">
            <input type="checkbox" /> 
            <div className="collapse-title text-md font-medium h-24 py-2 px-4 flex flex-row justify-normal items-center">
                <div className="flex flex-col rounded-lg w-[50%]">
                    <div className="text-left text-md text-neutral-content font-extrabold flex flex-row items-center">
                        {titleSvg}
                        {song.title}
                    </div>
                    <div className="text-left text-sm text-neutral-content font-bold w-full flex flex-row items-center">
                        {albumSvg}
                        {song.album.album}
                    </div>
                    <div className="text-left text-sm text-neutral-content font-bold w-full flex flex-row items-center">
                        {releaseDateSvg}
                        {song.release_date}
                    </div>
                </div>
                <div className="flex flex-col z-[5] h-20">
                    <div className="overflow-y-auto">
                        {song.artists.map((artist, index) => (
                            <div key={index} className="text-left p-1 text-md text-neutral-content font-bold">
                                {artist.artist}
                                <br/>
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
            <div className="collapse-content"> 
                <div className="w-full text-neutral-content">
                    <div className="font-bold text-sm">
                        Audio Features:
                    </div>
                    <div className="flex flex-row justify-evenly">
                    <table className="table text-xs  w-[50%]">
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
                    <table className="table text-xs w-[50%]">
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
                                <th>Tempo (BPM)</th>
                                <th>{song.tempo}</th>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongEntry;