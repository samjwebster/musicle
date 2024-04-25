import RankingsList from "./RankingsList";
// import { isAuth, getUserData } from "../../Services/authService";
import { getStreakRankings } from "../../Services/statsService";

const Leaderboards = () => {
    let streakData = {
        rankings: getStreakRankings(),
        title: "Top Streaks",
        desc: "The longest daily streaks of all players!"
    }
    // let streakRankings = getStreakRankings(1, 10);
    // let streakTitle = "Top Streaks";
    // let streakDesc = "The longest daily streaks of all players!";
    
    return (
        <div>
            <RankingsList title={streakData.title} desc={streakData.desc} rankings={streakData.rankings} />

        </div>
    );
}

export default Leaderboards;