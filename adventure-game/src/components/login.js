import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e, type) => {
    setCredentials({ ...credentials, [type]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://shr-adv-project.herokuapp.com/api/login/",
      data: credentials,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        props.onLogin(res.data.key);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={(e) => handleChange(e, "username")}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={(e) => handleChange(e, "password")}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
