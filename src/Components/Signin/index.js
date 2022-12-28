import { useState } from "react";
import { Navigate } from "react-router-dom";
export default function Signin(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [user,setUser] = useState()
  const handleSubmit = () => {
    console.log("submit button clicked");
    if (userName && password) {
      console.log("login success");
      // setUser(userName)
      props.setUser(userName);
    } else {
      console.log("login failed");
    }
  };
  if (props.user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <h3> Signin </h3>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="enter name"
        />{" "}
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password"
        />{" "}
        <br /> <br />
        <button onClick={handleSubmit}> Submit </button>
      </div>
    );
  }
}
