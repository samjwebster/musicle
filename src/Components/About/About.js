const About = () => {
    return (
        <div className="hero mt-24">
            <div className="hero-content text-center bg-neutral rounded-xl w-[66%]">
                <div className="w-[100%] flex flex-col items-center">
                    {/* <h1 className="text-3xl font-bold text-accent">
                        About
                    </h1> */}

                    <div className="glass bg-neutral p-4 m-4 rounded-xl w-[100%]">
                        <div className="text-xl font-bold text-primary">What is Musicle?</div>
                        <div className="mt-4 text-neutral-content text-justify text-md">
                            {/* &emsp; tab */}
                            Inspired by the famous New York Times game Wordle, Musicle is a music-based guessing game. In Musicle, players must guess a hidden song by deducing its various details. By guessing songs with matching characteristics to the hidden song, players can incrementally reveal information to inform their future guesses. When the user guesses the correct song, the puzzle is solved. Players can enjoy solving the daily puzzle or create their own custom puzzles according to their preferences.
                        </div>
                    </div>

                    <div className="glass bg-neutral p-4 m-4 rounded-xl w-[100%]">
                        <div className="text-xl font-bold text-primary">How do I play?</div>
                        <div className="mt-4 text-neutral-content text-justify text-md">
                            {/* &emsp; tab */}
                            The gameplay interface contains two sections: clues and guessable songs. At the beginning of the game, the clues panel displays the song's hidden details as question marks. The list of guessable songs contains all songs that match the currently known details. Players can guess a song from the song list by clicking the "Guess" button on its list entry. If the guessed song matches the hidden song, the puzzle is solved. Else, if the guessed song has any details that match the hidden song, the clues panel will update to reflect the newly discovered information. The list of guessable songs automatically filters to songs as information about the hidden song is revealed. 
                        </div>
                    </div>

                    <div className="glass bg-neutral p-4 m-4 rounded-xl w-[100%]">
                        <div className="text-xl font-bold text-primary">What data does Musicle use?</div>
                        <div className="mt-4 text-neutral-content text-justify text-md">
                            Musicle's data is collected from the Spotify API. Currently, there are over 640,000 songs by more than 29,000 different artists available for play in the Musicle database. 
                        </div>
                    </div>

                    <div className="glass bg-neutral p-4 m-4 rounded-xl w-[100%]">
                        <div className="text-xl font-bold text-primary">What information is known about each song?</div>
                        <div className="mt-4 text-neutral-content text-justify text-md">
                            For each song, Musicle reveals the following song details: title, artist(s), artist genre(s), album, and release date. Additionally, each song has its own audio features: danceability, energy, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo, duration, and popularity. Each audio feature is defined as follows:
                            <br />

                            <div className="mt-2">
                                <b className="text-primary">Acousticness:</b>&nbsp;
                                A measure of confidence whether a song is acoustic or not. 100% represents a high confidence that a song is acoustic, while 0% represents a high confidence that it is not.
                            </div>

                            <div className="mt-2">
                                <b className="text-primary">Danceability:</b>&nbsp;
                                A measure of whether a song is danceable based on a combination of musical elements including tempo and rhythm. 100% describes a song that is highly danceable, while 0% indicates that it is not.
                            </div>

                            <div className="mt-2">
                                <b className="text-primary">Energy:</b>&nbsp;
                                A measure of intensity and activity in a song. Typically, energetic songs feel fast, loud, and noisy. 100% represents a high-energy song, while 0% represents a low-energy song.
                            </div>

                            <div className="mt-2">
                                <b className="text-primary">Loudness:</b>&nbsp;
                                A measure of the average loudness of a song in decibels (dB). Values typically range between -60 and 0 dB.
                            </div>

                            <div className="mt-2">
                                <b className="text-primary">Mode:</b>&nbsp;
                                Indicates the modality of a song, which describes the type of scale from which its melodic content is derived. Mode has two possible values: major and minor. 
                            </div>

                            <div className="mt-2">
                                <b className="text-primary">Tempo:</b>&nbsp;
                                The estimated tempo of a song in beats per minute (BPM). In music, tempo typically describes the speed or pace of a given song.
                            </div>

                            <div className="mt-2">
                                <b className="text-primary">Speechiness:</b>&nbsp;
                                A measure of the presence of spoken words in a song. Generally speaking, values above 66% describe songs that are entirely spoken words, values between 33% and 66% describe songs that may contain sections of music and speech (such as rap music), and values below 33% describe songs that are entirely music or non-speech-like.
                            </div>

                            <div className="mt-2">
                                <b className="text-primary">Instrumentalness:</b>&nbsp;
                                A measure of confidence whether a song contains no vocals. 100% represents a high confidence that a song contains no vocals, while 0% represents a high confidence that it does contain vocals.
                            </div>

                            <div className="mt-2">
                                <b className="text-primary">Liveness:</b>&nbsp;
                                A measure of the presence of an audience in a song. Values above 80% describe songs that are likely live recordings, while lower values describe songs that are likely studio recordings.
                            </div>

                            <div className="mt-2">
                                <b className="text-primary">Valence:</b>&nbsp;
                                A measure of the musical positiveness conveyed by a song. Songs with high valence sound more positive (e.g., happy, cheerful, euphoric), while songs with low valence sound more negative (e.g., sad, depressed, angry). 100% represents a high confidence that a song is positive, while 0% represents a high confidence that it is negative.
                            </div>
                        </div>
                    </div>




            
                </div>
            </div>
        </div>
    );
}

export default About;