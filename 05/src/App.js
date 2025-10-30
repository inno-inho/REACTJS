import logo from './logo.svg';
import './App.css';

import Component_01 from './05ConditionalRendering/01Component';
import Component_02 from './05ConditionalRendering/02Component';
import Component_03 from './05ConditionalRendering/03Component';



function App() {


  return (
    <div className="App">
      <h1>조건부 랜더링</h1>

      {/* if문으로 조건부랜더링 */}
      <Component_01 isAuth = {false} />

      {/* 삼항연산자로 조건부랜더링 */}
      <hr/>
      <Component_02 isAuth = {true} />

      {/* &&으로 조건부랜더링 */}
      <Component_03 items = {['aaa', 'bbb', 'ccc', 'ddd']} />





    </div>
  );
}

export default App;
