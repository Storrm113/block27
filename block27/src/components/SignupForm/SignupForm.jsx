import React, {useState} from 'react'
import axios from 'axios';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    console.log(username, password);

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const data = await axios.post(
                "https://fsa-jwt-practice.herokuapp.com/signup", 
                {username, password}
            );
            console.log(data.data);
            } catch(err){console.error(err)}
        }
       
  return (
  <div>
    <h2>SignupForm</h2>
    {error?.mesage && <p>Error Signing Up</p>}
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
        <button style={{display: "block"}}>Submit</button>
    </form>
    </div>)
}

export default SignupForm;