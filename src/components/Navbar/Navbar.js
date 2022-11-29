import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar=()=>{
    return(
        <>
        <div className="nav_cont">
            <Link to="/"> <h3 className='nav_head'>Counter</h3></Link>
            <Link to="/sum"> <h3  className='nav_head'>Sum of N numbers</h3></Link>
            <Link to="/closeList"><h3  className='nav_head'>collapsible and Closable</h3></Link>
        </div>
        </>
    )
}
export default Navbar