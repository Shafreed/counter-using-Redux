import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementByAmount } from './counterSlice'

const Counter = () => {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
    const [incrementAmount,setIncrementAmount]=useState(0)
    const addValue=Number(incrementAmount)||0
    const resetAll=()=>{
        setIncrementAmount(0)
        dispatch(reset())
    }
    return (
    <section>
        <p>{count}</p>
        <div>
        <button onClick={()=>dispatch(increment())}>click me if you are in possitive mind</button>
        <button onClick={()=>dispatch(decrement())}>click me if you are in neggative mind</button>
        </div>
        <input type="text" value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}/>
    </section>
  )
}

export default Counter