import './Clues.css';
import { useState } from 'react'
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

const Clues = ({config})  => {
    return (
        
        <div className="p-2 mx-2 w-[100%] text-center glass rounded-xl flex flex-col justify-between">
            <div className="flex flex-col w-[100%]">
                <div className="flex flex-col glass rounded-lg py-2 px-4 bg-primary">
                    <div className="text-left text-2xl text-primary-content font-extrabold unsolved">
                        Title: {strToQuestionMarkSpan(config.song.title)}
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="text-left text-md text-primary-content font-bold unsolved w-full">
                            Album: {strToQuestionMarkSpan(config.song.album.album)}
                        </div>
                        <div className="text-left text-md text-primary-content font-bold unsolved w-full">
                            Release Date: {strToQuestionMarkSpan(config.song.release_date)}
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col glass rounded-lg py-2 px-4 mt-2 bg-secondary h-[20vh]">
                    <div className="text-left text-sm text-secondary-content font-bold">
                        Artists:
                    </div>
                    <div className="overflow-y-auto">
                        {config.song.artists.map((artist, index) => (
                            <div key={index} className="text-left text-md text-secondary-content unsolved glass p-2 my-2 rounded-lg font-bold">
                                {strToQuestionMarkSpan(artist.artist)}
                                <br/>
                                {artist.genres.map((genre, index) => (
                                    <div key={index} className="unsolved badge mx-1 badge-secondary">
                                        {strToQuestionMarkSpan(genre)}
                                    </div>
                                ))}                        
                            </div>
                    ))}
                    </div>
                </div>

                <div className="flex flex-col glass rounded-lg my-2 py-2 px-4 h-content bg-accent w-full text-accent-content">
                    <div className="font-extrabold">
                        Audio Features:
                    </div>
                    <div className="flex flex-row justify-evenly">
                    <table className="table text-sm">
                        <tbody>
                            <tr>
                                <th>Danceability</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(config.song.danceability))}</th>
                            </tr>
                            <tr>
                                <th>Energy</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(config.song.energy))}</th>
                            </tr>
                            <tr>
                                <th>Loudness</th>
                                <th>{strToQuestionMarkSpan(config.song.loudness)} dB</th>
                            </tr>
                            <tr>   
                                <th>Mode</th>
                                <th>{strToQuestionMarkSpan(config.song.mode === 1 ? "Major" : "Minor")}</th>
                            </tr>
                            <tr>   
                                <th>Speechiness</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(config.song.speechiness))}</th>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table text-sm">
                        <tbody>
                            <tr>   
                                <th>Acousticness</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(config.song.acousticness))}</th>
                            </tr>
                            <tr>   
                                <th>Instrumentalness</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(config.song.instrumentalness))}</th>
                            </tr>
                            <tr>
                                <th>Liveness</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(config.song.liveness))}</th>
                            </tr>
                            <tr>
                                <th>Valence</th>
                                <th>{strToQuestionMarkSpan(floatToPercentage(config.song.valence))}</th>
                            </tr>
                            <tr>
                                <th>Tempo (BPM)</th>
                                <th>{strToQuestionMarkSpan(config.song.tempo)}</th>
                            </tr>
                        </tbody>
                    </table>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Clues;