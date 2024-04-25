import { isAuth, getUserData } from "../../Services/authService";
import { getStreak } from "../../Services/statsService";

const HomeHero = () => {
    let auth = isAuth(true);
    let username = getUserData()?.username;
    let streak = getStreak();
    
    return (
        <div className="hero mt-32">
        {/* <div className="hero min-h-screen"> */}
            <div className="hero-content text-center glass rounded-xl">
                <div className="max-w-md">
                    {auth && username ? 
                        <h1 className="text-5xl font-bold">
                            Welcome back, <span className="text-accent">{username}</span>!
                        </h1> 
                        : <h1 className="text-5xl font-bold">
                            Welcome!
                        </h1>}

                    {auth && streak > 0 ? 
                        <p className="py-6">
                            You're on a <span className="text-accent">{streak}-day</span> streak. Keep it up!
                        </p>
                        : null
                    }  
                    
                    <button className="btn btn-primary my-4">Play Today's Puzzle</button>
                </div>
            </div>
        </div>
    );
}

export default HomeHero;