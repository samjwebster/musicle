import { isAuth, getUserData } from "./authService";

// Gets current daily challenge streak
export const getStreak = () => {
    return 6;
}

// Gets current daily challenge streak rank position
export const getStreakRank = () => {
    let rank = 3;
    let topPercent = 0.32;
    return {
        rank: rank,
        topPercent: topPercent
    };
}

// Gets the rankings for the daily challenge streak
// export const getStreakRankings = () => {
//     let auth = isAuth();
//     let uId = getUserData()?.id;

//     let rankings = [];
//     let userFound = false;
//     for (let i = 1; i <= 10; i++) {
//         let isUser = auth && i === uId;
//         rankings.push({
//             rank: i,
//             id: i,
//             username: "user_" + i,
//             streak: 11 - i,
//             // topPercent: 0.5,
//             isUser: isUser,
//         });
//         if(rankings[i-1].id === uId) {
//             rankings[i-1].isUser = true;
//             rankings[i-1].username = 'sam';
//             userFound = true;
//         }
//     }

//     if(!userFound) {
//         rankings.push({
//             rank: uId,
//             id: uId,
//             username: 'sam',
//             streak: -5,
//             isUser: true,
//         });
//     }

//     return rankings;
// }

export const getCurrStreakRankings = async () => {
    return new Promise((resolve) => {

        let auth = isAuth();
        let uId = getUserData()?.id;

        let rankings = [];
        let userFound = false;
        for (let i = 1; i <= 10; i++) {
            let isUser = auth && i === uId;
            rankings.push({
                rank: i,
                id: i,
                username: "user_" + i,
                value: 11 - i,
                isUser: isUser,
            });
            if(rankings[i-1].id === uId) {
                rankings[i-1].isUser = true;
                rankings[i-1].username = 'sam';
                userFound = true;
            }
        }

        if(!userFound) {
            rankings.push({
                rank: uId,
                id: uId,
                username: 'sam',
                value: -5,
                isUser: true,
            });
        }

        resolve(rankings);
    });
}

export const getAllTimeStreakRankings = async () => {
    return new Promise((resolve) => {
        let auth = isAuth();
        let uId = getUserData()?.id;

        let rankings = [];
        let userFound = false;
        for (let i = 1; i <= 10; i++) {
            let isUser = auth && i === uId;
            rankings.push({
                rank: i,
                id: i,
                username: "user_" + i,
                value: 11 - i,
                isUser: isUser,
            });
            if(rankings[i-1].id === uId) {
                rankings[i-1].isUser = true;
                rankings[i-1].username = 'sam';
                userFound = true;
            }
        }

        if(!userFound) {
            rankings.push({
                rank: uId,
                id: uId,
                username: 'sam',
                value: -5,
                isUser: true,
            });
        }

        resolve(rankings);
    });
}

export const getTotalSolvesRankings = async () => {
    return new Promise((resolve) => {
        let auth = isAuth();
        let uId = getUserData()?.id;

        let rankings = [];
        let userFound = false;
        for (let i = 1; i <= 10; i++) {
            let isUser = auth && i === uId;
            rankings.push({
                rank: i,
                id: i,
                username: "user_" + i,
                value: 40 - i,
                isUser: isUser,
            });
            if(rankings[i-1].id === uId) {
                rankings[i-1].isUser = true;
                rankings[i-1].username = 'sam';
                userFound = true;
            }
        }

        if(!userFound) {
            rankings.push({
                rank: uId,
                id: uId,
                username: 'sam',
                value: 3,
                isUser: true,
            });
        }

        resolve(rankings);
    });
}

export const getAvgGuessRankings = async () => {
    return new Promise((resolve) => {
        let auth = isAuth();
        let uId = getUserData()?.id;

        let rankings = [];
        let userFound = false;
        for (let i = 1; i <= 10; i++) {
            let isUser = auth && i === uId;
            rankings.push({
                rank: i,
                id: i,
                username: "user_" + i,
                value: 10 - i,
                isUser: isUser,
            });
            if(rankings[i-1].id === uId) {
                rankings[i-1].isUser = true;
                rankings[i-1].username = 'sam';
                userFound = true;
            }
        }

        if(!userFound) {
            rankings.push({
                rank: uId,
                id: uId,
                username: 'sam',
                value: 2,
                isUser: true,
            });
        }

        resolve(rankings);
    });
}

// Gets the total solves
export const getTotalSolves = () => {
    return 100;
}

// Gets the total solves rank position
export const getTotalSolvesRank = () => {
    let rank = 2;
    let topPercent = 0.18;
    return {
        rank: rank,
        topPercent: topPercent
    };
}

export const getProfileStats = async () => {
    if(isAuth()) {
        // Get stats from backend
        let stats = {
            "puzzlesSolved": 31,
            "currentStreak": 5,
            "maxStreak": 16,
            "avgGuesses": 7,
        }
        return new Promise((resolve) => {
            resolve(stats);
        });
    }
}

export const getRecentGames = async (page) => {
    let numRecentGames = 10;

    if(isAuth()) {
        // Get recent games from backend
        let games = [];
        for (let i = 0; i < numRecentGames; i++) {
            games.push({
                "puzzleId": i,
                "date": "2022-01-01",
                "status": true,
                "numGuesses": i,
            });
        }
        return new Promise((resolve) => {
            resolve(games);
        });
    }
}