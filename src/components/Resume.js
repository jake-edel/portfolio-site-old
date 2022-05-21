import Navbar from "./Navbar";
import resume from '../je_resume.jpg'

const Resume = () => {
    return(
        <>
            <div>
                <Navbar/>
            </div>
            <img src={resume} className='resume'/>
            <div>

            </div>
        </>
    )
}

export default Resume