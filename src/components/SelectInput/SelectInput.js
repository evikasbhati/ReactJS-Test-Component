import React, { useEffect } from 'react'
import { useState } from 'react'
import Options from '../Options/Options'
import './selectInput.css'

const SelectInput=()=>{
    const [drawer,setDrawer] = useState(false);
    const [selectedInput,setSelectedInput]=useState([]);

    
    const handleSelect=(id,color)=>{
        console.log('out');
        if(selectedInput===[] || selectedInput.includes(!id) ){
            setSelectedInput((prev)=>[...prev,{id,color}]);
        }else{
            console.log('in');

        }
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
            <span>x </span>
            </div>
                </div>
                ))
               }
            </div>
               <div className='icontContainer'>
                <button className='selectionButton'>x</button>
                <button className='selectionButton' onClick={handleDrawer}>Y</button>
            </div>
        </div>
        {
            drawer &&
        <Options handleSelect={handleSelect} />
        }
        </>
    )
}
export default SelectInput