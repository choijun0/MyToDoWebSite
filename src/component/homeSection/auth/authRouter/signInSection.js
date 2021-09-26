import React, {useState} from "react";
import {createAccountByEmail, signInWithEmail} from "data/fireBase/func"

const SignInSection = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const changeId = ({target : {value}}) => {
    setId(value);
  }
  const changePassword = ({target : {value}}) => {
    setPassword(value);
  }
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmail(id, password).then((user)=>{
      setId("");
      setPassword("");
    })
  }
  return (
    <form>
      <input type="text" placeholder="id" onChange={changeId} value={id}/>
      <input type="text" placeholder="password" onChange={changePassword} value={password}/>
      <button onClick={signIn}/>
    </form>
  )
}

export default SignInSection;