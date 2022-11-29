import { useContext } from "react"
import { useReducer } from "react"
import { useEffect, useState } from "react"
import { DataContext } from "../../components/Context/DataContext"
import './Check.css'
const arr_value=[1,47,56789,547,6,56,7,5,43654,674,72,67,73,54,65,4,61,]
const Check=(props)=>{

    // html-pdf
// const {dataDispatch}=props;
// const hi=console.log("JsX called")
// const [state,setState]=useState(console.log("stATE CALLED"))


// useEffect(()=>{
//     console.log("useEffect Called",state)
// },[state])

// const newValue=useContext(DataContext)
// console.log(typeof(dataDispatch));
return(
    <>
    <div className="big">

    <div className="Check_cont">
        <ul className="Check_ul">
            {arr_value.map((item)=>(

            <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
    {/* <button onClick={()=>dataDispatch({type:"WAIT",payload:"HOW"})}>Click me</button> */}
    </div>

    {/* <h2>{newValue.name}
</h2> */}
    {/* <h2>{state}</h2> */}

    </>
)
    
}
export default Check