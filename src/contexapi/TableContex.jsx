import Axios from "axios"
import React, { useContext, useEffect,useReducer } from "react"

import {createContext} from "react"
import tableReducer, { initialState } from "../reducer/tableReducer"

const Api = "http://localhost:3004/table"


const TableContex = createContext()

const TableProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tableReducer, initialState);

    const getAlldata = async (Api) => {
        try {
            const response = await Axios.get(Api);
            dispatch({
                type: "GET_ALL_DATA",
                payload: {
                    alldata: response.data
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    //   to call api 
    useEffect(() => {
        getAlldata(Api)
    }, [])

   // delete single  data function 
   const addtoTable =async(inputField) => {
    try {
        await Axios.post(`${Api}`,inputField)
       .then(response => getAlldata(Api))
    }
    catch (error) {
        console.log(error)
    }


}
    // delete single  data function 
    const removeTable = async(id) => {
        try {
          await  Axios.delete(`${Api}/${id}`).then(response => getAlldata(Api))
        } 
        catch (error) {
            console.log(error)
        }


    }
    // update Table 
    const updateTable = (id, newRow) => {

        try {
            Axios.put(`${Api}/${id}`,newRow).then(response => getAlldata(Api))
        }
        catch (error) {
            console.log(error)
        }

    }



    return (
        <TableContex.Provider value={{ ...state, removeTable, updateTable,addtoTable }}>
            {children}
        </TableContex.Provider>
    );

};

// custom hook global state 
const useGlobalContex = () => {
    return useContext(TableContex)
}

export { TableContex, TableProvider, useGlobalContex };

