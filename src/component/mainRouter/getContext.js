import {MainContext} from "./mainRouter";
import {useContext} from "react"
 
export const GetMainState = () => {
  return useContext(MainContext);
}