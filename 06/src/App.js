import logo from './logo.svg';
import './App.css';

// 경로 이동에 관련된 모듈 받아오기, endpoint 지정하는거랑 비슷하대
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" // 터미널에서 install react-router-dom 치면 설치됨 

import About from "./06ROUTE/About"
import Contact from "./06ROUTE/Contact"
import Home from "./06ROUTE/Home"


function App() {


  return (
    <div className="App">
     <h1>REACT ROUTE</h1>

      {/*  */}

      <Router>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/About" element={<About />} />
          <Route path = "/Contact/:name?/:age?" element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
