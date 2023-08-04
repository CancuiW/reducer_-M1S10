export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const MEMORY_RESET = 'MEMORY_RESET';
export const MEMORY_OPERATION ='MEMORY_OPERATION';
export const MEMORY_ZERO ='MEMORY_ZERO';

export const addOne = () => {
    return({type:ADD_ONE});
}
export const clear = () => {
    return ({ type: CLEAR_DISPLAY });
}
export const memoryZero=()=>{
    return ({ type: MEMORY_ZERO })
}
export const memorySet = () => {
    return ({ type: MEMORY_RESET });
}
export const memoryOperation = () => {
    return ({ type: MEMORY_OPERATION });
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return ({ type: CHANGE_OPERATION, payload: operator });
}
