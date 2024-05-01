import RankingsList from "./RankingsList";
// import { isAuth, getUserData } from "../../Services/authService";
import { getCurrStreakRankings, getAllTimeStreakRankings, getTotalSolvesRankings, getAvgGuessRankings } from "../../Services/statsService";
import { useState, useEffect } from "react";
import Spinner from "../Other/Spinner";

const Leaderboards = () => {
    // Leaderboards for current streaks held by all players
    const [ currStreakRankings, setCurrStreakRankings ] = useState({});
    // Leaderboards for all-time streaks held by all players
    const [ allTimeStreakRankings, setAllTimeStreakRankings] = useState({});
    // Leaderboards for total solves held by all players
    const [ totalSolvesRankings, setTotalSolvesRankings] = useState({});
    // Leaderboards for average guesses to solve rankings held by all players
    const [ avgGuessRankings, setAvgGuessRankings] = useState({});

    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        let currStreakPromise = getCurrStreakRankings();
        let allTimeStreakPromise = getAllTimeStreakRankings();
        let totalSolvesPromise = getTotalSolvesRankings();
        let avgGuessPromise = getAvgGuessRankings();
        
        Promise.all([currStreakPromise, allTimeStreakPromise, totalSolvesPromise, avgGuessPromise]).then((values) => {
            setCurrStreakRankings({
                rankings: values[0],
                title: "Top Current Streaks",
                desc: "The players who currently hold the longest daily puzzle streaks!",
                unit: "Streak"
            });
            setAllTimeStreakRankings({
                rankings: values[1],
                title: "Top Streaks",
                desc: "The players who have held the longest daily puzzle streaks of all time!",
                unit: "Streak"
            });
            setTotalSolvesRankings({
                rankings: values[2],
                title: "Top Solvers",
                desc: "The players who have solved the most puzzles, both daily and custom!",
                unit: "Puzzles Solved"
            });
            setAvgGuessRankings({
                rankings: values[3],
                title: "Top Guessers",
                desc: "The players who have the lowest average guesses to solve puzzles!",
                unit: "Average Guesses"

            });
            setLoading(false);
        });
    }, []);

    return (
        <div className="w-[100vw] h-[90vh] flex flex-col items-center">
            {loading ? <Spinner /> : 

            <div className="w-[80vw] h-[90vh] mt-20 p-4 flex flex-row justify-between items-center bg-neutral rounded-xl">
                <div className="w-[90vw] h-[100%] justify-evenly bg-base-300 rounded-xl overflow-y-auto">
                    <div className="mt-4 font-bold text-primary text-xl">Streak Leaderboards</div>
                    <div className="flex flex-row w-[100%] justify-evenly">
                        <RankingsList rankings={currStreakRankings.rankings} title={currStreakRankings.title} desc={currStreakRankings.desc} unit={currStreakRankings.unit} />
                        <RankingsList rankings={allTimeStreakRankings.rankings} title={allTimeStreakRankings.title} desc={allTimeStreakRankings.desc} unit={allTimeStreakRankings.unit}/>
                    </div>
                    
                    <div className="mt-4 font-bold text-primary text-xl">Solve Leaderboards</div>
                    <div className="flex flex-row w-[100%] justify-evenly">
                        <RankingsList rankings={totalSolvesRankings.rankings} title={totalSolvesRankings.title} desc={totalSolvesRankings.desc} unit={totalSolvesRankings.unit}/>
                        <RankingsList rankings={avgGuessRankings.rankings} title={avgGuessRankings.title} desc={avgGuessRankings.desc} unit={avgGuessRankings.unit}/>
                    </div>
                </div>

                <div className="mx-2 w-[20vw] h-[90%] flex flex-col justify-evenly items-center">
                    <div className="mt-4 stats stats-vertical shadow bg-primary-content">
                        <div className="stat place-items-center">
                            <div className="stat-title">Most Guessed Song</div>
                            <div className="stat-value text-secondary">Song Title</div>
                            <div className="stat-desc text-secondary">by Song Artist</div>
                            <div className="stat-desc text-secondary">Guessed # Times</div>
                        </div>
                    </div>
                        
                    <div className="mt-4 stats stats-vertical shadow">
                        <div className="stat place-items-center bg-accent-content">
                            <div className="stat-title">Most Guessed Artist</div>
                            <div className="stat-value">Artist Name</div>
                            <div className="stat-desc">Guessed # Times</div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            }
        </div>
    );
}

export default Leaderboards;