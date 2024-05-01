import { Link } from "react-router-dom";
import { isAuth, getUserData } from "../../Services/authService";
import triplet from "../../Assets/triplet.svg";

// This component is the header of our app, which is a replacement for the footer. It contains a link to the home page, and links to the about and data pages
// We found header is a more famililar and useful navigation tool than footer
const Header = () => {
    return (
        // <div className="navbar bg-primary-content">
        <div className="navbar glass bg-primary-content fixed top-0 left-0 z-10 h-[3vh]">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-3xl text-primary">
                    <img src={triplet} alt="" style={{ width: '40px', height: '40px', marginRight: '0px', fill: 'red', filter: "brightness(0) saturate(100%) invert(60%) sepia(28%) saturate(6402%) hue-rotate(103deg) brightness(99%) contrast(77%)" }} />
                    musicle
                </Link>
            </div>
            <div className="flex-none text-primary">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/game">
                            Play Daily
                        </Link>
                    </li>
                    <li>
                        <Link to="/setup">
                            Play Custom
                        </Link>
                    </li>
                    <li>
                        <Link to="/leaderboards">
                            Leaderboards
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    {isAuth(false) ? (
                        <li>
                            <Link to="/profile">
                                {getUserData().username}'s Profile
                            </Link>
                        </li>
                    ) : 
                        <li>
                            <details>
                                <summary>
                                    Account
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li>
                                        <Link to="/login">Log In</Link>
                                    </li>
                                    <li>
                                        <Link to="/register">Register</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;
