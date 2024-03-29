import React, { useState } from 'react'

interface IState{
    user:{
        name:string,
        email:string,
        password:string
    }
}
const Login:React.FC=()=>{
    const[state, setState]= useState<IState>({
        user:{
            name:"",email:"", password:""
        }
    })
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        setState({
            user:{
                ...state.user,
                [e.target.name]:e.target.value
            }
        })
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        return (state.user)
    }
    return(
            <>
            <div className="model-wrapper"> </div>
            <div className="model-Container">
                <form onSubmit={handleSubmit}>
                     <h1>Welcome User</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Name :</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name='name' value={state.user.name} onChange={handleChange} placeholder='enter your name' aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address :</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={state.user.email} onChange={handleChange} placeholder='enter email' aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password :</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={state.user.password} onChange={handleChange}/>
                </div>

             
            </form>
        </div>
        </>
    )
}
export default Login