import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
 
  const[userNameReg, setUserNameReg] = useState("");
  const[passwordReg, setPasswordReg] = useState("");

  const[userName, setUserName] = useState("");
  const[password, setPassword] = useState("");

  const[status, setStatus] = useState("")
   
  const register = ()=>{
    Axios.post('http://localhost:3001/register', {username:userNameReg, password:passwordReg}).then((res)=>{
      console.log(res);
    })
  }

  const login = ()=>{
    Axios.post('http://localhost:3001/login', {username:userName, password:password}).then((res)=>{
      if(res.data.message){
        setStatus(res.data.message)
      } else{
         setStatus(res.data[0].username) // comment
      }
    })
  }

  return (
    <div className="App">


     <h2>Registration-</h2>
     <div className='form'>
       <label>Username</label>
       <input type="text" name='username' placeholder='Username/Email.......' onChange={(e)=> setUserNameReg(e.target.value)}/>
       <label>Password</label>
       <input type="password" name='password' placeholder='password.....' onChange={(e)=> setPasswordReg(e.target.value)}/>
       <button onClick={register}>Register</button>
     </div>

     <h2>Login-</h2>
     <div className='form'>
       <label>Username</label>
       <input type="text" name='username' placeholder='Username/Email here.....' onChange={(e)=> setUserName(e.target.value)} />
       <label>Password</label>
       <input type="text" name='password' placeholder='Enter password here....' onChange={(e)=> setPassword(e.target.value)}/>
       <button onClick={login}>Login</button>
     </div>


     <h1>{status}</h1>

 
    </div>
  );
}

export default App;
