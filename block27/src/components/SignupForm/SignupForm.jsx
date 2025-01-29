import axios from 'axios';
import React, {useState} from 'react'

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    console.log(username, password);

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const data = await axios.post('https://fsa-jwt-practice.herokuapp.com/signup', {username, password});
        }catch(err){console.error(err)}
        }
       
  return (<div>
    <h2>SignupForm</h2>
    {error && <p>Error Signing Up</p>}
    <form action="">
        <label htmlFor="">
            <p>Username:</p>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label htmlFor="">
            <p>Password:</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>Signup</button>
    </form>
    </div>)
}

export default SignupForm;