import React from "react";

const AuthForm = ({ register, user, onChange, onSubmit }) => {
    return (
    <div>
      <form onSubmit={onSubmit}>
        {/* Username */}
        <label className="input input-bordered flex items-center gap-2 m-2">
            Username:
            <input 
                type="text" 
                className="grow" 
                value={user.username}
                onChange={onChange}
                name="username"
                placeholder="Username"
                required
            />
        </label>

        {/* Password */}
        <label className="input input-bordered flex items-center gap-2 m-2">
        Password:
            <input 
                type="text" 
                className="grow" 
                value={user.password}
                onChange={onChange}
                name="password"
                placeholder="Password"
                min="0"
                required
            />
        </label>

        <div className="flex flex-col m-2">
          <button className="btn btn-outline btn-primary" type="submit" onSubmit={onSubmit}>
            {register ? "Create Account" : "Log In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
