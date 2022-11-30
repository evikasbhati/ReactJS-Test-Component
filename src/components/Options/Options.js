import './option.css'
const Options=(props)=>{

    const {handleSelect,data=[]}=props;
    return (
        <>
        <div className="colorContainer">
            {
            data.map((colorItem,index)=>(
                <div key={colorItem.id} onClick={()=>handleSelect(colorItem,index)} >
                <div className="backgroundDiv" style={{background:colorItem.color,top:index*32}} />
                <div key={colorItem.id} className="colorOption" style={{color:colorItem.color,top:index*32}}>{colorItem.color}</div>
                </div>
            ))
            }
        </div>
        </>
    )
}
export default Options