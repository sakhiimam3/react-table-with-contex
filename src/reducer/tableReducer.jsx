export const initialState = {
    tableData: []
}

const tableReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_ALL_DATA":

            return {
                ...state,
                tableData: payload.alldata
            }

        default:
            throw new Error(`No case for type ${type} found in table reducer`)
    }


}

export default tableReducer