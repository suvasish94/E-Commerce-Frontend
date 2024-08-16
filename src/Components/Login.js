import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  const [email, setEmail] = React.useState();
  const [password, setPassWord] = React.useState();

  React.useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);
  const navigate = useNavigate();

  async function login() {
    let items = { email, password };
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(items),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  }
  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Log in</h1>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => setPassWord(e.target.value)}
          className="form-control"
          placeholder="Password"
        />
        <br />
        <br />
        <button onClick={login} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
