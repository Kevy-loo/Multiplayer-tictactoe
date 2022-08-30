import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

function SignUp({ setIsAuth }) {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);

  const signUp = () => {
    axios.post("http://localhost:8000/signup", user).then((res) => {
      const { token, userId, firstName, lastName, username, hashedPassword } =
        res.data;
      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("firstName", firstName);
      cookies.set("lastName", lastName);
      cookies.set("username", username);
      cookies.set("hashedPassword", hashedPassword);
      setIsAuth(true);
    });
  };
  return (
    <div className="signup">
      <label>SignUp</label>
      <input
        placeholder="First Name"
        type="text"
        onChange={(event) => {
          setUser({ ...user, firstName: event.target.value });
        }}
      />
      <input
        placeholder="Last Name"
        type="text"
        onChange={(event) => {
          setUser({ ...user, lastName: event.target.value });
        }}
      />
      <input
        placeholder="Username"
        type="text"
        onChange={(event) => {
          setUser({ ...user, username: event.target.value });
        }}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />
      <button onClick={signUp}>Submit</button>
    </div>
  );
}

export default SignUp;
