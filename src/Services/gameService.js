export const loadDailyConfig = async () => {
    let dailyConfig = {
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
        known: {
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
            resolve(dailyConfig)
        } else {
            reject("Error loading daily config")
        }
    });

    // return gameConfig;
}

export const loadEmptyConfig = () => {
    return {
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
        known: {
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
    };
}

export const loadSongs = async (config, page, filter) => {
    // Config describes the current state of the game. It is used to filter song options by the known song characteristics.
    // Page is the page number of the songs list to load. Each page is 25 songs.
    // Filter is a string to filter the songs list by title, album, or artist.

    // console.log({
    //     config: config,
    //     page: page,
    //     filter: filter,
    // })

    // We need to construct the object to be sent to the songs endpoint
    let jointConfig = {
        "title": {
            "known": config.known.title,
            "value": config.song.title,
        },
        "artists": (() => {
            let knownArtists = [];
            for(let i = 0; i < config.known.artists.length; i++) {
                try{
                    knownArtists.push({
                        "known": config.known.artists[i],
                        "value": config.song.artists[i].artist_id,
                    });
                } catch(e) {
                    continue;
                }
            }
            return knownArtists;
        })(),
        "album": {
            "known": config.known.album,
            "value": config.song.album.album_id,
        },
        "release_date": {
            "known": config.known.release_date,
            "value": config.song.release_date,
        },
        "danceability": {
            "known": config.known.danceability,
            "value": config.song.danceability,
        },
        "energy": {
            "known": config.known.energy,
            "value": config.song.energy,
        },
        "loudness": {
            "known": config.known.loudness,
            "value": config.song.loudness,
        },
        "mode": {
            "known": config.known.mode,
            "value": config.song.mode,
        },
        "speechiness": {
            "known": config.known.speechiness,
            "value": config.song.speechiness,
        },
        "acousticness": {
            "known": config.known.acousticness,
            "value": config.song.acousticness,
        },
        "instrumentalness": {
            "known": config.known.instrumentalness,
            "value": config.song.instrumentalness,
        },
        "liveness": {
            "known": config.known.liveness,
            "value": config.song.liveness,
        },
        "valence": {
            "known": config.known.valence,
            "value": config.song.valence,
        },
        "tempo": {
            "known": config.known.tempo,
            "value": config.song.tempo,
        },
    }


    let filterObject = {
        config: jointConfig,
        page: page,
        filter: filter,
    }

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
                {
                    artist_id: 45,
                    artist: "Test Artist 2!",
                    genres: [
                        "rock",
                        "pop",
                    ],
                },
                {
                    artist_id: 46,
                    artist: "Test Artist 3!",
                    genres: [
                        "rock",
                        "pop",
                    ],
                }
            ],
            album: {
                album_id: i,
                album: i + "'s Album | " + filter,
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

    let songsObject = {
        songs: songs,
        total: 123,
    }

    return new Promise((resolve, reject) => {
        if(true) {
            resolve(songsObject)
        } else {
            reject("Error loading songs list")
        }
    });
}