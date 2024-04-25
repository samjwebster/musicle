export const loadDailyConfig = async () => {
    let gameConfig = {
        song: {
            song_id: 33333,
            title: "Fake Song",
            artists: [
                {
                    artist_id: 11111,
                    artist: "MC Artist A",
                    genres: [
                        "hip hop",
                        "rap",
                    ],
                },
                {
                    artist_id: 22222,
                    artist: "DJ Artist B",
                    genres: [
                        "hip hop",
                        "electronic",
                    ],
                }
            ],
            album: {
                album_id: 44444,
                album: "Fake: The Album",
            },
            release_date: "2021-01-01",
            danceability: 0.23,
            energy: 0.61,
            loudness: 42.3,
            mode: 1,
            speechiness: 0.03,
            acousticness: 0.12,
            instrumentalness: 0.90,
            liveness: 0.12,
            valence: 0.34,
            tempo: 123.45,
        },
        guessed: {
            title: false,
            artists: [
                false,
                false,
            ],
            album: false,
            release_date: false,
            danceability: false,
            energy: false,
            loudness: false,
            mode: false,
            speechiness: false,
            acousticness: false,
            instrumentalness: false,
            liveness: false,
            valence: false,
            tempo: false,
        }
    }

    return new Promise((resolve, reject) => {
        if(true) {
            resolve(gameConfig)
        } else {
            reject("Error loading daily config")
        }
    });

    // return gameConfig;
}

export const loadEmptyConfig = () => {
    return {config: {
        song: {
            song_id: 0,
            title: "",
            artists: [
                {
                    artist_id: 0,
                    artist: "",
                    genres: [],
                },
            ],
            album: {
                album_id: 0,
                album: "",
            },
            release_date: "",
            danceability: 0,
            energy: 0,
            loudness: 0,
            mode: 0,
            speechiness: 0,
            acousticness: 0,
            instrumentalness: 0,
            liveness: 0,
            valence: 0,
            tempo: 0,
        },
        guessed: {
            title: false,
            artists: [
                false,
                false,
            ],
            album: false,
            release_date: false,
            danceability: false,
            energy: false,
            loudness: false,
            mode: false,
            speechiness: false,
            acousticness: false,
            instrumentalness: false,
            liveness: false,
            valence: false,
            tempo: false,
        }
    }};
}

export const loadSongs = async (page = 0) => {
    let pageSize = 25;

    let songs = [];
    for(let i = page*pageSize; i < (page+1)*pageSize; i++) {
        songs.push({
            song_id: i,
            title: "Song " + i,
            artists: [
                {
                    artist_id: i,
                    artist: "Guy",
                    genres: [
                        "jazz",
                        "pop",
                    ],
                },
            ],
            album: {
                album_id: i,
                album: i + "'s Album",
            },
            release_date: "2021-01-01",
            danceability: 0.23,
            energy: 0.61,
            loudness: 42.3,
            mode: 1,
            speechiness: 0.03,
            acousticness: 0.12,
            instrumentalness: 0.90,
            liveness: 0.12,
            valence: 0.34,
            tempo: 123.45,
        });
    }

    return new Promise((resolve, reject) => {
        if(true) {
            resolve(songs)
        } else {
            reject("Error loading songs list")
        }
    });
}