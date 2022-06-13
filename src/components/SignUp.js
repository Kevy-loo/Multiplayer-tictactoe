import React, {useState} from 'react';

function SignUp() {
  const [user, setUser] = useState(null);

  const signUp = () => {}
  return (
    <div className='signup'>
      <label>SignUp</label>
      <input 
        placeholder='First Name'
        type='text' onChange={(event) => {
          setUser({...user, firstName: event.target.value})
        }}
      />
      <input 
        placeholder='Last Name'
        type='text' onChange={(event) => {
          setUser({...user, lastName: event.target.value})
        }}
      />
      <input 
        placeholder='Username'
        type='text' onChange={(event) => {
          setUser({...user, username: event.target.value})
        }}
      />
      <input 
        placeholder='Password' 
        type='password'
        onChange={(event) => {
          setUser({...user, password: event.target.value})
        }}
      />
        <button onClick={signUp}>Submit</button>
    </div>
  )
}

export default SignUp;