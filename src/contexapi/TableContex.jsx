import { useReducer } from "react"
import {createContext} from "react"
import tableReducer ,{initialState} from "../reducer/tableReducer"
const Api="http://localhost:3004/table"
const TableContex=createContext(initialState)

export const TableProvider=({children})=>{
      const [state,dispatch]=useReducer(tableReducer,initialState);
    
      const  GetAlldata=async(data)=>{
          try {
            
          } catch (error) {
            
          }
      }
}