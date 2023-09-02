import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({login}) {
  const [user, setUser] = useState("");
  const navigate = useNavigate()


  function handleLogin(evt) {
    evt.preventDefault();
    login(user);
    navigate('./movies')
  }

  return (
    <>
      <div class="login">
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
          <h3>Enter a username</h3>
          <input
            name="user"
            value={user}
            onChange={(evt) => setUser(evt.target.value)}
          />
          <button type="submit" value="user">
            Login
          </button>
        </form>
      </div>
    </>
  );
}