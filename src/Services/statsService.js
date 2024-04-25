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
export const getStreakRankings = () => {
    let auth = isAuth(true);
    let uId = getUserData()?.id;

    let rankings = [];
    let userFound = false;
    for (let i = 1; i <= 10; i++) {
        let isUser = auth && i === uId;
        rankings.push({
            rank: i,
            id: i,
            username: "user_" + i,
            streak: 11 - i,
            // topPercent: 0.5,
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
            streak: -5,
            isUser: true,
        });
    }

    return rankings;
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

// Gets the rankings for the total solves
export const getTotalSolvesRankings = (start, end) => {
    let rankings = [];
    for (let i = start; i <= end; i++) {
        rankings.push({
            rank: i,
            username: "User" + i,
            solves: end - i,
            topPercent: 0.5
        });
    }
    return rankings;
}