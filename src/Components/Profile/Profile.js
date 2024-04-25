import { getUserData, logoutUser } from "../../Services/authService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    let navigate = useNavigate();
    let user = getUserData();

    let logoutWrapper = () => {
        logoutUser();
        navigate("/");
        window.location.reload();
    }
    
    return (
        <div className="flex flex-col items-center p-12">
            <div className="glass rounded-xl p-4">
                <h2 className="text-2xl font-medium text-accent">
                    {user.username}'s Profile
                </h2>
                <button className="btn btn-primary" onClick={logoutWrapper}>Log Out</button>
            </div>
        </div>
    )

}

export default Profile;