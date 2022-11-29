import { useState } from "react"

const Button=(props)=>{
    const [myButton,setMyButton]=useState("")
    function handleButton(){
setMyButton(props.data)
    }
    return(
        <><button onClick={()=>{handleButton()}}>{myButton}</button>
        </>
    )
}
export default Button