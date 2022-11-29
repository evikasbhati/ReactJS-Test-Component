import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Check from '../Check/Check';
import './Sum.css'

const Sum=(props)=>{
    let add=0;
    const [sum,setSum]=useState(0)
    const [num,setNum]=useState(0)
    const {dataDispatch}=props;

    const handleSum=()=>{
        for(let i=1;i<=num;i++){
          add=add+i
        }
        setSum(add);
    }
    // console.log(sum,num)
    return(
        <>
        <Navbar/>
        <div className="sum_container">
            <div className="sum">
                <h2>Sum of N numbers</h2>
                <div className="cont">
                <input  type="number" placeholder='Enter a number' onChange={(e)=>{setNum(e.target.value)}} />
                <h3 className='sum_int'>Sum- ({sum})</h3>
                </div>
                <button className="sum_button" onClick={()=>{handleSum()}}>Sum</button>
            </div>
        </div>
        {/* <Check/> */}
        {/* <Check dataDispatch={dataDispatch}/> */}

        </>
    )
}
export default Sum