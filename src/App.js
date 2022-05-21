import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' exact element={<Navbar/>}> </Route>
          <Route path='/about' exact element={<About/>}></Route>
          <Route path='/projects' exact element={<Projects/>}></Route>
          <Route path='/contact' exact element={<Contact/>}></Route>
          <Route path='/resume' exact element={<Resume/>}></Route>
        </Routes>
    </Router>
    </main>
  );
}

export default App;
