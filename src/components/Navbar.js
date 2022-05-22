import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
    <div>
        <div className='container'>
            <ul className='navbar'>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/resume'>Resume</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    </div>
    )
};

export default Navbar;