import React from "react";
import { useState } from "react";
import './Test.css'

const Test=()=>{
    const [open,setOpen]=useState(false);

    const handleOpen=(value)=>{
        setOpen(!value);
    }
    return(<>
    <div className="mainC" >
        <div className="c1">
            <h1>how</h1>
            <h1>who</h1>
        </div>
        <div className={open?"c2":"c3"}>
            <div className="tes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, distinctio laborum laboriosam fugiat expedita deleniti dolorem nemo optio consequuntur molestias excepturi recusandae rerum sed quidem totam laudantium, quo sapiente autem?
            Esse officia ab fugiat rerum quasi delectus saepe enim, suscipit, aliquam quis perspiciatis libero numquam odio incidunt quia, vel dolorum sint molestiae illo autem porro recusandae. Sequi quasi recusandae rerum?
            Omnis, consequuntur eveniet, hic exercitationem quis impedit repellendus praesentium modi laboriosam, asperiores quisquam fugiat voluptas dignissimos! Adipisci perspiciatis voluptatum incidunt laboriosam quae est cumque odit quas dicta. Vel, perspiciatis itaque?</div>
        </div>
    </div>
    <button onClick={()=>handleOpen(open)}>Drawer</button>
    </>)
}
export default Test;