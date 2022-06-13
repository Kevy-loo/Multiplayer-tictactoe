import React, {useState} from 'react'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {}
  return (
    <div className='login'>
      <label>Login</label>
      <input 
        placeholder='Username'
        type='text' onChange={(event) => {
          setUsername(event.target.value)
        }}
      />
      <input 
        placeholder='Password' 
        type='password'
        onChange={(event) => {
          setPassword(event.target.value)
        }}
      />
        <button onClick={login}>Submit</button>
    </div>
  )
}

export default Login