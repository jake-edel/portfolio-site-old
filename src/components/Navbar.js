import CustomLink from './CustomLink';

const Navbar = () => {
    return (
    <div>
        <div className='container'>
            <ul className='navbar'>
                <li className='navlink'><CustomLink to='/' children='About'></CustomLink></li>
                <li className='navlink'><CustomLink to='/projects' children='Projects'></CustomLink></li>
                <li className='navlink'><CustomLink to='/resume' children='Resume'></CustomLink></li>
                <li className='navlink'><CustomLink to='/contact' children='Contact'></CustomLink></li>
                {/* <li className='navlink'><CustomLink to='/test' children='Test'></CustomLink></li> */}
            </ul>
        </div>
    </div>
    )
};

export default Navbar;