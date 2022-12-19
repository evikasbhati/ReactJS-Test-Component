import React from 'react'
import { useState } from 'react'
import Options from '../Options/Options'
import './selectInput.css'

const colorData=[
    {
        id:"colorId_1",
        color:'Red'
    },
    {
        id:"colorId_2",
        color:'Green'
    },
    {
        id:"colorId_3",
        color:'Yellow'
    },
    {
        id:"colorId_4",
        color:'Purple'
    },
    {
        id:"colorId_5",
        color:'Black'
    },
    {
        id:"colorId_6",
        color:'Blue'
    }
]


const SelectInput=()=>{
    const [drawer,setDrawer] = useState(false);
    const [selectedInput,setSelectedInput]=useState([]);

    
    const handleSelect=(colorItem,index)=>{
        if(colorItem==='remove'){
            setSelectedInput([]);
        }else{
            if(!selectedInput.some(element => element===colorItem)){
                setSelectedInput((prev)=>[...prev,colorItem]);
            }else  return  
        }}

    const handleRemove=(colorItem)=>{
        const value=selectedInput.filter((item)=>item!==colorItem)
        setSelectedInput(value);
        console.log('handleRemove')
    }
        
    
    const handleDrawer=()=>{
        setDrawer(!drawer)
    }

    return(
        <>
        <div className='selectInputContainer'>
            <div className='inputContainer'>
               { selectedInput.map((colorItem,index)=>(
                <div key={colorItem.id} style={{position:'relative',left:index*100}}>
            <div className="inputBack" style={{background:colorItem.color}} />
            <div className='inputDiv'>
            <span className="inputValue" style={{color:colorItem.color}}>{colorItem.color}</span>
            <span onClick={()=>handleRemove(colorItem,index)}>x </span>
            </div>
                </div>
                ))
               }
            </div>
               <div className='icontContainer'>
                <button className='selectionButton' onClick={()=>handleSelect('remove')}>x</button>
                <button className='selectionButton' onClick={handleDrawer}>Y</button>
            </div>
        </div>
        {
            drawer &&
        <Options handleSelect={handleSelect} data={colorData} />
        }
        </>
    )
}
export default SelectInput