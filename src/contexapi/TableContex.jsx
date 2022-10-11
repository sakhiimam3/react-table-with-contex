import { useReducer } from "react"
import {createContext} from "react"
import tableReducer ,{initialState} from "../reducer/tableReducer"

const Api="http://localhost:3004/table"


const TableContex=createContext()

export const TableProvider=({children})=>{
      const [state,dispatch]=useReducer(tableReducer,initialState);
    
      const  GetAlldata=async(Api)=>{
          try {
                const data=axios.get(Api)
                dispatch({
                    payload:{
                        data:data
                    }
                })
          } catch (error) {
              console.log(error)
          }
      }
}