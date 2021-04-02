import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login";
import Game from "./components/game";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token.length > 0) {
      console.log("token: ", token);
    }
  }, [token]);

  const onLogin = (key) => {
    setToken(key);
  };

  return (
    <div className="App">
      <header className="App-header">Adventure Game!</header>
      {token.length === 0 && <Login onLogin={onLogin} />}
      {token.length > 0 && <Game token={token} />}
    </div>
  );
}

export default App;
