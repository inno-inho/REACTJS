import logo from './logo.svg';
import './App.css';

import EventComponent_01 from "./04EVENT/01OnClick"
import EventComponent_02 from "./04EVENT/02OnMouse"
import EventComponent_03 from "./04EVENT/03OnKey"
import EventComponent_04 from "./04EVENT/04OnChange"
import EventComponent_05 from "./04EVENT/05OnSubmit"
import EventComponent_06 from "./04EVENT/06OnScroll"


function App() {


  return (
    <div className="App">
      <h1>Event Handling</h1>

      {/* 01 onClick */}
      <hr/>
      <EventComponent_01 />

      {/* 02 onMouse */}
      <hr/>
      <EventComponent_02 />

      {/* 03 onKey */}
      <hr/>
      <EventComponent_03 />

      {/* 04 onChange */}
      <hr/>
      <EventComponent_04 />

      
      {/* 05 onForm */}
      <hr/>
      <EventComponent_05 />

      {/* onScroll */}
      <hr/>
      <EventComponent_06 />
    </div>
  );
}

export default App;
