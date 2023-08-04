import { ADD_ONE, 
        APPLY_NUMBER, 
        CHANGE_OPERATION,
         CLEAR_DISPLAY,
         MEMORY_RESET,
          MEMORY_OPERATION,
        MEMORY_ZERO } from './../actions';
//action:

// export const ADD_ONE = "ADD_ONE";

// export const APPLY_NUMBER = "APPLY_NUMBER";
// export const CHANGE_OPERATION = "CHANGE_OPERATION";

// export const addOne = () => {
//     return ({ type: ADD_ONE });
// }

// export const applyNumber = (number) => {
//     return ({ type: APPLY_NUMBER, payload: number });
// }


export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        case (CLEAR_DISPLAY):
            return ({
                ...state,
                total:0
            })
        case (MEMORY_RESET):
            return ({
                ...state,
                memory:state.total
            })
        case (MEMORY_OPERATION):
            return ({
                ...state,
                total:calculateResult(state.total,state.memory,state.operation)
            })
        case (MEMORY_ZERO):
            return ({
                ...state,
                memory: 0
            })
            
        default:
            return state;
    }
}

export default reducer;