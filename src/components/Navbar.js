import { Link } from 'react-router-dom'
import headshot from '../headshot.jpg'


const Navbar = () => {
    return (
    <div>
        <div >
            <img src={headshot} width='250px' className='headshot' alt='Jakob Edelstein Headshot'></img>
            <h1 className='name'>Jakob Edelstein</h1>
        </div>
        <div className='container'>
            <ul className='navbar'>
                <li><Link to='/about'>About</Link></li>
                {/* <br></br> */}
                <li><Link to='/projects'>Projects</Link></li>
                {/* <br></br> */}
                <li><Link to='/resume'>Resume</Link></li>
                {/* <br></br> */}
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    </div>
    )
};

export default Navbar;