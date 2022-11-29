import { useState,useReducer, useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sum from '../Sum/Sum'
import './Counter.css'
import jsPdf from 'jspdf'
// import { DataContext } from '../../components/Context/DataContext'
// const conData={
//     id:1,
//     name:"nobody"
// }

const dataInitialState=[
    {
        id:0,
        dataName:""
    },
    {
        id:6,
        dataName:""
    },
    
]

const Assign_1_Counter=()=>{
    const [count,setCount]=useState(0)
    const handleCounter=(value)=>{
        value==="inc"?setCount(count+2):setCount(count-1)

    }
    const htmlSource=useRef();
    
    const dataReducer=(state,action)=>{
        switch(action.type){
            case "WAIT":
                console.log("wait called",);
                return {
                
                    ...state,
                    dataName:action.payload.dataName,
                    [state[action.payload.index].id]:action.payload.id
                }
                // default : throw new Error("error not stated")
                default : return state

        }
    }
    const [dataState,dataDispatch]=useReducer(dataReducer,dataInitialState);

    const doc=new jsPdf();

    const getPdf=()=>{
        
       const vv= window.print()
        // doc.text()
    //    const vvs= doc.html(JSON.stringify(htmlSource))
        // doc.save('way.pdf');
        console.log('pdf clicked',vv);
    }


    return(
        <>
        {/* <DataContext.Provider value={conData}> */}
        <Navbar/>
        <button onClick={getPdf}>Click me</button>
        <div className="counter_container" ref={htmlSource}>
            <div className="buttons">
            <button className="counter_button" onClick={()=>handleCounter("dec")}><span className='count_icon'>-</span></button><h2> Counter - ({count})</h2><button className="counter_button" onClick={()=>handleCounter("inc")}><span className='count_icon'>+</span></button>
            </div>
            {/* <Sum dataDispatch={dataDispatch}/> */}
            {/* <Sum /> */}
            {/* <button onClick={onClick={dataDispatch({type:"WAIT",payload:newValue})}}></button> */}
        </div>

        {/* </DataContext.Provider> */}
        </>
    )
}
export default Assign_1_Counter