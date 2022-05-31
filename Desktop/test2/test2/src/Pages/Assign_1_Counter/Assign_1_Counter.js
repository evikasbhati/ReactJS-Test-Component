import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Assign_1_Counter.css'

const Assign_1_Counter=()=>{
    const [count,setCount]=useState(0)
    const handleCounter=(value)=>{
        value==="inc"?setCount(count+2):setCount(count-1)

    }
    return(
        <>
        <Navbar/>
        <div className="counter_container">
            <div className="buttons">
            <button className="counter_button" onClick={()=>handleCounter("dec")}><span className='count_icon'>-</span></button><h2> Counter - ({count})</h2><button className="counter_button" onClick={()=>handleCounter("inc")}><span className='count_icon'>+</span></button>
            </div>
        </div>
        </>
    )
}
export default Assign_1_Counter