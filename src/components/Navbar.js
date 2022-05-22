import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
    <div>
        <div className='container'>
            <ul className='navbar'>
                <li className='navlink'><Link to='/'>About</Link></li>
                <li className='navlink'><Link to='/projects'>Projects</Link></li>
                <li className='navlink'><Link to='/resume'>Resume</Link></li>
                <li className='navlink'><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    </div>
    )
};

export default Navbar;