import React,{useReducer} from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState } from '../reducers';
import { addOne, applyNumber, changeOperation, clear, memorySet, memoryOperation, memoryZero } from '../actions';
//  const ADD_ONE = "ADD_ONE";
//const addOne = () => {
//     return ({ type: ADD_ONE });

// const initialState = {
//   total: 100,
//   operation: "*",
//   memory: 100
// }

function App() {

  const [state,dispatch]=useReducer(reducer,initialState)
  console.log(state)
  // const handle1=()=>{
  //      dispatch(addOne())
    
  // }
  const handleNumber=(e)=>{
    const num=parseInt(e.target.value)
    dispatch(applyNumber(num))
  }
  const handleOperation=(e)=>{
    const operation=e.target.value
    dispatch(changeOperation(operation))
  }
  const clearTotal=()=>{
    dispatch(clear())
  }
  const memoryReset=()=>{
    dispatch(memorySet())
  }
  const handleMemoryOperation=()=>{
    dispatch(memoryOperation())
  }

  const handleMemoryZero=()=>{
    dispatch(memoryZero())
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=>{memoryReset()}}/>
              <CalcButton value={"MR"} onClick={() => { handleMemoryOperation() }}/>
              <CalcButton value={"MC"} onClick={() => { handleMemoryZero()}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleNumber}/>
              <CalcButton value={2} onClick={handleNumber} />
              <CalcButton value={3} onClick={handleNumber} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNumber} />
              <CalcButton value={5} onClick={handleNumber} />
              <CalcButton value={6} onClick={handleNumber} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNumber} />
              <CalcButton value={8} onClick={handleNumber} />
              <CalcButton value={9} onClick={handleNumber} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperation }/>
              <CalcButton value={"*"} onClick={handleOperation} />
              <CalcButton value={"-"} onClick={handleOperation} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>{clearTotal()}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
