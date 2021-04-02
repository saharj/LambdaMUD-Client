import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="login">
      <form>
        <label>
          Username:
          <input type="text" name="username" value={credentials.username} />
        </label>
        <label>
          Password:
          <input type="text" name="password" value={credentials.password} />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
