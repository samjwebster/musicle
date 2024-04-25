import './Clues.css';
import { useState, useEffect } from 'react'
import { loadEmptyConfig } from '../../Services/gameService';

// Function to generate a random delay within the specified range
const getRandomDelay = (min, max) => {
    return Math.random() * (max - min) + min;
};

const stringToSpans = (str_q, str_o) => {
    let minDelay = 0;
    let maxDelay = 2;
    return str_q.split('').map((char, index) => {
        let delay = `${getRandomDelay(minDelay, maxDelay)}s`;
        let o = str_o[index];
        return (
            <span key={index} style={{position: 'relative'}}>
                <span style={{opacity: 1}}>{o}</span>
                <span className="floaty" style={{animationDelay: delay, opacity: 0}}>{char}</span>
            </span>
        );
    });
};

let strToQuestionMarkSpan = (input) => {
    input = "" + input
    // Convert non-space chars to question marks
    let question_string = input.replace(/[a-zA-Z0-9]/g, "?");
    return stringToSpans(question_string, input);
}

let floatToPercentage = (input) => {
    return Math.round(input * 100, 3) + "%";
}

const Clues = (config)  => {
    const [gameConfig, setGameConfig] = useState(loadEmptyConfig());
    // setGameConfig(loadEmptyConfig());

    useEffect(() => {
        setGameConfig(config);
    }, [loadEmptyConfig()]);

    return (
        <div className="hero mt-24">
            <div className="hero-content text-center glass rounded-xl flex flex-row justify-between w-[80vw] h-[50vh]">
                <div className="flex flex-col w-[50%]">
                    <div className="flex flex-col glass rounded-lg p-4 bg-primary">
                        <div className="text-left text-3xl text-primary-content font-extrabold unsolved">
                            Title: {strToQuestionMarkSpan(gameConfig.config.song.title)}
                        </div>
                        <div class="flex flex-row justify-between">
                            <div className="text-left text-lg text-primary-content font-bold unsolved w-[50%]">
                                Album: {strToQuestionMarkSpan(gameConfig.config.song.album.album)}
                            </div>
                            <div className="text-left text-lg text-primary-content font-bold unsolved w-[50%]">
                                Release Date: {strToQuestionMarkSpan(gameConfig.config.song.release_date)}
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col glass rounded-lg p-4 mt-2 bg-secondary h-[25vh]">
                        <div className="text-left text-lg text-secondary-content font-bold">
                            Artists:
                        </div>
                        <div className="overflow-y-auto">
                            {gameConfig.config.song.artists.map((artist, index) => (
                                <div key={index} className="text-left text-md text-secondary-content unsolved glass p-2 my-2 rounded-lg font-bold">
                                    Name: {strToQuestionMarkSpan(artist.artist)}
                                    <br/>
                                    Genres:
                                    
                                    {artist.genres.map((genre, index) => (
                                        <div key={index} className="unsolved badge mx-1 badge-secondary">
                                            {strToQuestionMarkSpan(genre)}
                                        </div>
                                    ))}                        
                                </div>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col glass rounded-lg p-4 bg-accent w-[50%] text-accent-content">
                    <div className="font-extrabold">
                        Audio Features:
                    </div>
                    <div className="flex flex-row justify-evenly">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>Danceability</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(gameConfig.config.song.danceability))}</th>
                            </tr>
                            <tr>
                                <th>Energy</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(gameConfig.config.song.energy))}</th>
                            </tr>
                            <tr>
                                <th>Loudness</th>
                                <th>{strToQuestionMarkSpan(gameConfig.config.song.loudness)} dB</th>
                            </tr>
                            <tr>   
                                <th>Mode</th>
                                <th>{strToQuestionMarkSpan(gameConfig.config.song.mode === 1 ? "Major" : "Minor")}</th>
                            </tr>
                            <tr>   
                                <th>Speechiness</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(gameConfig.config.song.speechiness))}</th>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table">
                        <tbody>
                            <tr>   
                                <th>Acousticness</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(gameConfig.config.song.acousticness))}</th>
                            </tr>
                            <tr>   
                                <th>Instrumentalness</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(gameConfig.config.song.instrumentalness))}</th>
                            </tr>
                            <tr>
                                <th>Liveness</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(gameConfig.config.song.liveness))}</th>
                            </tr>
                            <tr>
                                <th>Valence</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(gameConfig.config.song.valence))}</th>
                            </tr>
                            <tr>
                                <th>Tempo</th>
                                <th>{strToQuestionMarkSpan(gameConfig.config.song.tempo)} BPM</th>
                            </tr>
                        </tbody>
                    </table>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Clues