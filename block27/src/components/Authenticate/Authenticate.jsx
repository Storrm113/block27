import React, {useState} from 'react'
import axios from 'axios';

function Authenticate( {token} ) {
    const [error, SetError] = useState(null);
    const [success, setSuccess] = useState(false);
    async function handleClick() {
    console.log("Authenticating...");
      try {
        const result = await axios
        ("https://fsa-jwt-practice.herokuapp.com/authenticate", {
          headers: { Authorization: `Bearer ${token}`}
        });
        console.log(result);
        if (result.data.success) {
          setSuccess(true);
        }
        if (result.data.massage === "jwt malformed") {
          throw new Error("Invalid token");
        }
      } catch (err) {
          console.log(err.massage);
          console.log()
          SetError(err.massage);
        }
      }
    
  return (
    <div>
        <h2>Authenticate</h2>
        {error && <p>Error Authenticating({error}), Please try again.</p>}
        {success && <p>Authenticated!</p>}
        <button onClick={handleClick}>Authenticate Here</button>
        </div>
  )
}

export default Authenticate