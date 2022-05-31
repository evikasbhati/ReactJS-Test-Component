import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar=()=>{
    return(
        <>
        <div className="nav_cont">
            <Link to="/"> <h3 className='nav_head'>Assignment 1</h3></Link>
            <Link to="/sum"> <h3  className='nav_head'>Assignment 2</h3></Link>
            <Link to="/closeList"><h3  className='nav_head'>Assignment 3</h3></Link>
        </div>
        </>
    )
}
export default Navbar