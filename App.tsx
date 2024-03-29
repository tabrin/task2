import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './Tasks/Login';
interface IState{
  isLogin:boolean
}
const App:React.FC=()=> {
  const[state, setState]= useState<IState>({
    isLogin:false
  })
 
  const handleLogin=()=>{
    setState({isLogin:false})
  }

  const handleLogout=()=>{
    
    setState({isLogin:true})
  }
  return (
    <div >

            {state.isLogin && state.isLogin?(<Login/>):(<p>Please Click the Login button to get Login Form</p>)}

            {state.isLogin && state.isLogin ?(<div className='model-btn'><button className='model-btn' onClick={handleLogin}>Submit</button></div>):(<button className='btn btn-primary' onClick={handleLogout}>Login</button>)}

    </div>
    
  );
}

export default App;
