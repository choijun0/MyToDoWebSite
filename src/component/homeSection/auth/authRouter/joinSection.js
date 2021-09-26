import React,{useState} from "react";
import {createAccountByEmail, signInWithEmail} from "data/fireBase/func"

const JoinSection = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const changeId = ({target : {value}}) => {
    setId(value);
  }
  const changePassword = ({target : {value}}) => {
    setPassword(value);
  }

  const createNewAccount = async (e) => {
    e.preventDefault();
    createAccountByEmail(id, password).then(()=>{
      setId("");
      setPassword("");
    })
  }
  return (
    <form onSubmit={createNewAccount}>
      <input type="text" placeholder="id" onChange={changeId} value={id}/>
      <input type="text" placeholder="password" onChange={changePassword} value={password}/>
      <button onClick={createNewAccount}/>
    </form>
  )
}
export default JoinSection;