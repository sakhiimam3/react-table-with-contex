import React, { useContext, useEffect } from "react"
import Axios from "axios"
import { useReducer } from "react"
import { createContext } from "react"
import tableReducer, { initialState } from "../reducer/tableReducer"

const Api = "http://localhost:3004/table"


const TableContex = createContext()

const TableProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tableReducer, initialState);

    const getAlldata = async (Api) => {
        try {
            const response = await fetch(Api);
            const data = await response.json()


            dispatch({
                type: "GET_ALL_DATA",
                payload: {
                    alldata: data
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
    const removeTable = (id) => {
        try {
            fetch(`${Api}/${id}`, {
                method: 'DELETE',
            }).then(response => getAlldata(Api))
        }
        catch (error) {
            console.log(error)
        }


    }
    // update Table 
    const updateTable = ({ id, data }) => {
        console.log(id, "id", data)
        try {
            fetch(`${Api}/${id}`, {
                method: 'PUT',
                body: data
            }).then(response => getAlldata(Api))
        }
        catch (error) {
            console.log(error)
        }

    }



    return (
        <TableContex.Provider value={{ ...state, removeTable, updateTable }}>
            {children}
        </TableContex.Provider>
    );

};

// custom hook global state 
const useGlobalContex = () => {
    return useContext(TableContex)
}

export { TableContex, TableProvider, useGlobalContex };