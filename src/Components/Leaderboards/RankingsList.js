let bgs = {
    "gold": " bg-yellow-300 ",
    "silver": " bg-cyan-200 ",
    "bronze": " bg-orange-400 ",
    "user": " bg-neutral-content ",
    "other": " bg-neutral"
}

let texts = {
    "ranked": " text-primary-content ",
    "user": " text-neutral font-bold ",
    "userSpecial": " text-neutral font-extrabold",
    "other": " text-neutral-content "
}

const RankingsRow = ({ rank, name, value, isUser }) => {
    let classes = "grid grid-cols-3 glass rounded-lg px-4 py-1 my-1 text-xl"

    // Background
    if(rank === 1) classes += bgs.gold;
    else if(rank === 2) classes += bgs.silver;
    else if(rank === 3) classes += bgs.bronze;
    else if(isUser) classes += bgs.user;
    else classes += bgs.other;

    // Text
    if(isUser) {
        if(rank >= 1 && rank <= 3) {
            classes += texts.userSpecial;
        } else {
            classes += texts.user;
        }
    }
    else if(rank >= 1 && rank <= 3) classes += texts.ranked;
    else classes += texts.other;

    // if(rank === 1) classes += boldText + goldClass;
    // else if(rank === 2) classes += boldText + silverClass;
    // else if(rank === 3) classes += boldText + bronzeClass;
    // else classes += " " + otherClass;

    // if(isUser) classes += " bg-primary" + boldText;

    return (
        <div className={classes}>
            <div className="text-left">#{rank}</div>
            <div>{name}</div>
            <div className="text-right">{value}</div>
        </div>
    );
}

const RankingsList = ({ title, desc, rankings }) => {
    let playerRanking = false;
    if(rankings.length > 10) {
        playerRanking = rankings[10];
        rankings = rankings.slice(0, 10);   
    }

    return (
        <div className="hero mt-16">
            <div className="hero-content text-center glass rounded-xl flex flex-col">
                <div className="max-w-md text-3xl text-primary font-extrabold">
                    {title}
                </div>
                <div className="max-w-md text-lg">
                    {desc}
                </div>
                <ol className="min-w-96">
                    {rankings.map((ranking, index) => (
                    <RankingsRow key={index} rank={ranking.rank} name={ranking.username} value={ranking.streak} isUser={ranking.isUser}/>
                    ))}
                    {playerRanking ? (
                        <div className="p-0 m-0 flex flex-col">
                            <div className="divider divider-neutral my-0"></div>
                            <RankingsRow rank={playerRanking.rank} name={playerRanking.username} value={playerRanking.streak} isUser={playerRanking.isUser}/>
                        </div>
                    ) : null}
                </ol>
            </div>
        </div>
    );
}

export default RankingsList;