import Navbar from "./Navbar";

function Projects(props) {
  return (
     <>
        <div>
            <Navbar></Navbar>
        </div>
        <div>
            <h2>Projects</h2>
            <ul className="project-list">
                <li><a href="https://github.com/jake-edel/ce_console.net_4.6.1">A cost estimation program</a> to calculate the price of a stair tower based on top level parameters. Written in C#</li>
                <br/><br/>
                <li><a href="https://github.com/jake-edel/freecad-py">Python scripting</a> to extract part parameters from a CAD model and use it to configure part designs for fabrication and assembly.</li>
                <br/><br/>
                <li><a href="https://github.com/jake-edel/enigma">Enigma</a>: A two way encryption algorithim, written in Ruby, to encode/decode a message using a key and date.</li>
                <br/><br/>
                <li><a href="https://github.com/jake-edel/rock-paper-scissors">Sword, Shield, Magic</a>: A riff on a browser based Rock, Paper, Scissors written in HTML/CSS/Javascript.</li>
            </ul>
        </div>
     </> 
  )
}
 
export default Projects;