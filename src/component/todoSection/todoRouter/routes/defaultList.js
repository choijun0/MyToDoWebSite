import React,{useState, useEffect} from "react";
import List from "reusableComponent/list";
import TodoElement from "component/todoSection/todoElement"

const DefaultList = ({data}) => {
  return (
    <List Element={TodoElement} data={data}/>
  )
}

export default DefaultList;