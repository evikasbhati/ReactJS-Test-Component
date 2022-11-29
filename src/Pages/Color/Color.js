import { useState } from "react"
import Options from "../../components/Options/Options"
import SelectInput from "../../components/SelectInput/SelectInput"

const Color=()=>{
    const [selectedInput,setSelectedInput]=useState([]);
    const handleSelect=(id,color)=>{
        setSelectedInput((prev)=>[...prev,{id,color}]);
    }
    return(
        <div>
        <Options handleSelect={handleSelect} />
        <SelectInput color={selectedInput} />
        </div>
    )
}
export default Color