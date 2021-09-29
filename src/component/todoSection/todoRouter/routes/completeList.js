import React,{useState, useEffect} from "react";
import List from "reusableComponent/list";
import TodoElement from "component/todoSection/todoElement"
import {watchDataBase} from "data/fireBase/func"

const CompleteList = ({userObj, data}) => {
  return (
    <List Element={TodoElement} data={data}/>
  )
}

export default CompleteList;