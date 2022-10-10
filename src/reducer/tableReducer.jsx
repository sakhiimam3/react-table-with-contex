export const initialState={
        tableData:[]
}

const tableReducer = (state,action)=>{
    const {type, payload}=action;
    switch (type) {

        case "ADD_DATA":
            console.log("addData",payload)
            return{
                ...state,
                tableData:payload
            }

        case "ALL_TABLE_DATA":
            console.log("alldata",payload)
            return{
                ...state,
                tableData:payload
            }
    
        default:
        throw new Error(`No case for type ${type} found in table reducer`)
    }

     
}

export default tableReducer