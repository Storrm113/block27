import React, { useState } from "react";
import axios from "axios";

function SignupForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  const validateForm = () => {
    if (username.length < 8) {
      setValidationError("Username must be at least 8 characters long.");
      return false;
    }
    setValidationError("");
    return true;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const data = await axios.post(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        { username, password }
      );
      if (data.data.success) {
        setToken(data.data.token);
        setSuccess(true);
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      setError(err);
    }
  }

  return (
    <div>
      <h2>SignupForm</h2>
      {error && <p className="error">Error Signing Up</p>}
      {success && <p className="success">Signed Up Successfully</p>}
      {validationError && <p className="error">{validationError}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;