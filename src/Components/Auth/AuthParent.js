import React, { useEffect, useState } from "react";
import { createUser, loginUser } from "../../Services/authService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const AuthParent = ({register}) => {
    let navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
    });

    // flag is the state to watch for add/remove updates
    const [submit, setSubmit] = useState(false);

    // Depending on if we're registering or logging in, we'll call the appropriate function
    useEffect(() => {
        if (newUser && submit) {
            if(register) {
                createUser(newUser).then((userCreated) => {
                    setSubmit(false);
                    if (userCreated) {
                        alert(
                            `${userCreated.username}, you successfully registered! You may now login with your credentials.`
                        );
                        navigate("/login");
                    }
                    
                },
                (error) => {
                    alert(error);
                });
            } else {
                loginUser(newUser).then((userLoggedIn) => {
                    setSubmit(false);
                    if (userLoggedIn) {
                        // alert(`${userLoggedIn.get("username")}, you successfully logged in!`);
                        navigate("/");
                        // Reload the page to update the header
                        window.location.reload();
                    }
                },
                (error) => {
                    alert(error);
                
                });
            }
        }
    }, [newUser, submit]);

    // onChangeHandler will update the newUser state with the input values
    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        setNewUser({ ...newUser, [name]: newValue });
    };

    // onSubmitHandler will set the submit flag to true
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setSubmit(true);
    };
    
    return (
        <div className="flex flex-col items-center p-12">
            {/* Add text depending if we're registering or logging in */}
            <div className="glass rounded-xl p-4">
                <h2 className="text-2xl font-medium text-accent">
                    {register ? "Welcome!" : "Welcome Back!"}
                </h2>
                <AuthForm register={register} user={newUser} onChange={onChangeHandler} onSubmit={onSubmitHandler} />
            </div>
        </div>
    );
}

export default AuthParent;