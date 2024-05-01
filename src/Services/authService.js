let users = [
    {
        "username": "sam",
        "password": "pw"
    },
    {
        "username": "joe",
        "password": "test"
    },
]

export const initializeAuth = () => {
    const loggedInExists = localStorage.getItem("loggedIn") !== null;
    const currentUserExists = localStorage.getItem("currentUser") !== null;

    if(!loggedInExists) {
        localStorage.setItem("loggedIn", "false");
    }

    if(!currentUserExists) {
        localStorage.setItem("currentUser", JSON.stringify(null));
    }
}


export const isAuth = () => {
    if(localStorage.getItem("loggedIn") === "true") return true;
    else if (localStorage.getItem("loggedIn") === "false") return false;
}

export const getUserData = () => {
    if(isAuth()) {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}

const findUser = (user) => {
    let f = {
        found: false,
        user: null
    };
    users.forEach((u) => {
        if(u.username === user.username && u.password === user.password) {
            f = {
                found: true, 
                user: u
            };
        }
    });
    return f;
}

const addUser = (newUser) => {
    users.push(newUser);
    return newUser;
}

export const createUser = (newUser) => {
    return new Promise((resolve, reject) => {
        let found = findUser(newUser).found;
        if(!found) {
            resolve(addUser(newUser));
        } else {
            reject("User already exists!");
        }
    });
}

export const loginUser = (user) => { 
    return new Promise((resolve, reject) => {
        let found = findUser(user);
        console.log(found.found)
        if(found.found) {
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(found.user));
            resolve(found.user);
        } else {
            reject("User not found!");
        }
    });
}

export const logoutUser = () => {
    if(isAuth()) {
        localStorage.setItem("loggedIn", "false");
        localStorage.setItem("currentUser", JSON.stringify(null));
    } 
}