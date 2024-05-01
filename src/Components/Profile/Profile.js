import { getUserData, logoutUser } from "../../Services/authService";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfileStats, getRecentGames } from "../../Services/statsService";
import Spinner from "../Other/Spinner";

const Profile = () => {
    let navigate = useNavigate();
    let user = getUserData();

    const [profileStats, setProfileStats] = useState({});
    const [recentGames, setRecentGames] = useState([]);

    const [profileLoading, setProfileLoading] = useState(true);

    useEffect(() => {
        let statsPromise = getProfileStats();
        let recentGamesPromise = getRecentGames();

        Promise.all([statsPromise, recentGamesPromise]).then((values) => {
            setProfileStats(values[0]);
            setRecentGames(values[1]);
            setProfileLoading(false);
        });
    }, []);

    let logoutWrapper = () => {
        logoutUser();
        navigate("/");
        window.location.reload();
    }

    let loadGame = (gameId) => {
        console.log("loading game: " + gameId);
    }
    
    return (
        <div className="flex flex-col items-center mt-[4.25em] w-[100%] fixed">
            {profileLoading ? <Spinner /> : 
            <div className="glass rounded-xl p-1 w-[50%] h-[100%] flex flex-row items-center justify-evenly">
                <div className="flex flex-col items-center justify-evenly h-full p-4">
                    <h2 className="text-2xl text-accent font-bold">
                        {user.username}'s Profile
                    </h2>

                    <button className="btn btn-primary px-4 mt-4" onClick={logoutWrapper}>Log Out</button>

                    <div className="mt-4 stats stats-vertical shadow">
                        
                        <div className="stat place-items-center">
                            <div className="stat-title">Current Streak</div>
                            <div className="stat-value text-secondary">{profileStats.currentStreak}</div>
                            <div className="stat-desc text-secondary">Days</div>
                        </div>
                        
                        <div className="stat place-items-center">
                            <div className="stat-title">Max Streak</div>
                            <div className="stat-value">{profileStats.maxStreak}</div>
                            <div className="stat-desc">Days</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Puzzles Solved</div>
                            <div className="stat-value">{profileStats.puzzlesSolved}</div>
                            <div className="stat-desc">Puzzles</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Average Guesses to Sovle</div>
                            <div className="stat-value">{profileStats.avgGuesses}</div>
                            <div className="stat-desc">Guesses</div>
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-col justify-evenly items-center w-[60%] m-4 p-4 overflow-x-auto bg-primary-content text-neutral-content rounded-lg">
                    <h2 className="text-xl m-2 font-bold text-primary">Recent Puzzles</h2>
                    <div className="text-sm text-secondary">Showing the last 10 puzzles played. Click any puzzle to play.</div>

                    <table className="table text-center text-sm">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Puzzle Date</th>
                                <th>Puzzle Status</th>
                                <th>Guess Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentGames.map((game, index) => {
                                return (
                                    <tr key={index} onClick={() => loadGame(game.puzzleId)}>
                                        <td>{game.date}</td>
                                        <td>{game.status ? "Solved" : "Unsolved"}</td>
                                        <td>{game.numGuesses}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            }
        </div>
    )

}

export default Profile;