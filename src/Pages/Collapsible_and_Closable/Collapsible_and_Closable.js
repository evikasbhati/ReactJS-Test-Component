import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Collapsible_and_Closable.css'

const Assign_3_Close_List=()=>{

    const [upDown,setUpDown]=useState(false) 
    const [cross,setCross]=useState(true) 

   
    const [owner,setOwner]=useState([])
    useEffect(()=>{
        const getOwner=async()=>{
            try{
                const res=await axios.get('url')
                setOwner(res.data.result)
                console.log(res.data.result)
            }
            catch(err){}
        }
       
        getOwner();
    },[])

    const [source,setSource]=useState([])
    useEffect(()=>{
        const getSource=async()=>{
            try{
                const res=await axios.get('url')
                setSource(res.data.result)
            } 
            catch(err){}
        }
        getSource();
    },[])

    const [stage,setStage]=useState([])
   useEffect(()=>{
       const getStage=async()=>{
           try{
               const res=await axios.get('url will added ')
               setStage(res.data.result)
           }

           catch(err){}
       }
       getStage()
   },[])

   const cont_ar=[
       {id:1,
        heading:'Lead owner',
        Data:owner
    },
       {id:2,
        heading:'Lead source',
        Data:source
    },
       {id:3,
        heading:'Stage',
        Data:stage
    }
   ]
// console.log(cross)    
  
    return(
        <>
        <Navbar/>
        {cont_ar.map((item)=>(
        <div className="container" key={item.id}>
            <div className="top">
                <h3>{item.heading}</h3>

                <span  className='head'key={item.id} onClick={()=>setUpDown(!upDown)}><button>{upDown===true?"⌃":"v"}</button></span>
                <span  onClick={()=>setCross(false)}><button>X</button></span> 
          </div> 
           
          {cross===true?<div className=""> <div className="search"> 
            <input className='search_input' type="text" placeholder='search..' />
            </div>
             <div key={item.id} className={upDown===true?"up":"down"}>
            {item.Data.map((item)=>(
                       <div className="options" key={item.id} >
                <input  type="radio" />
                <label >{Object.values(item).splice(1,1)}</label>
            </div>
             ))}
             </div> 
             </div>
             :null }
        </div>
        
        ))}
        </>
    )
}
export default Assign_3_Close_List