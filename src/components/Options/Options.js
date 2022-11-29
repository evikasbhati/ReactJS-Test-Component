import './option.css'
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

const Options=(props)=>{

    const {handleSelect}=props;
    return (
        <>
        <div className="colorContainer">
            {
            colorData.map((colorItem,index)=>(
                <div key={colorItem.id} onClick={()=>handleSelect(colorItem.id,colorItem.color)} >
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