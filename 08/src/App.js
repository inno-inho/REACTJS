import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom" // 터미널에서 install react-router-dom 치면 설치됨 
import Home from "./pages/Home"
import About from "./pages/About"


function App() {

  return (
    
    <>

        <Router>
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/about" element={<About />} />
          </Routes>
        </Router>
      
    </>
    
  );
}

export default App;
