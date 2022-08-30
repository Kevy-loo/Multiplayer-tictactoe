import React, {useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import TicGame from './tictactoe/TicGame';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { StreamChat } from 'stream-chat';
import Cookies from 'universal-cookie';





function App() {
  const cookies = new Cookies();
  const token = cookies.get('token')
  const client = StreamChat.getInstance(process.env.REACT_APP_API_KEY)
  const [isAuth, setIsAuth] = useState(false)

  const logOut = () => {
    cookies.remove('token');
    cookies.remove('userId');
    cookies.remove('firstName');
    cookies.remove('lastName');
    cookies.remove('hashedPassword');
    cookies.remove('channelName');
    cookies.remove('username');
    client.disconnectUser();
    setIsAuth(false)

  }

  if (token) {
      client.connectUser({
      id: cookies.get("userId"),
      name: cookies.get('username'),
      firstName: cookies.get('firstName'),
      lastName: cookies.get('lastName'),
      hashPassword: cookies.get('hashPassword')
    }, token
    ).then((user) => {
      console.log(user)
      setIsAuth(true)
    })
  } 



  return (
    <div className="App">
      {/* <Routes>
        <Route path='/login' element={<Login/>}/>
      
      </Routes> */}
      {isAuth ? (<button onClick={logOut}>Logout</button>) :(
        <>
      <SignUp setIsAuth={setIsAuth}/>
      <Login setIsAuth={setIsAuth}/>
      </>
      )}
      <TicGame/>
      
      {/* <Routes>
        <Route path='/tictactoe' element={<TicGame/>}/>
      </Routes> */}
      
    </div>
  );
}

export default App;
