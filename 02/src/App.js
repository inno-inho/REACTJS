import logo from './logo.svg';
import './App.css';

import { Element1 } from './02JSX/01_Basic';  // {}는 그 파일 안에있는 거를 꺼내올때 쓰는 기호
import { Element2, Element3, Element4, Elemnet5 } from './02JSX/01_Basic';  // {}는 그 파일 안에있는 거를 꺼내올때 쓰는 기호

import Basic_01 from "./02JSX/01_Basic"   // ./02JSX/01_Basic의 default 컴포넌트 불러오기(defualComponent1, defualComponent2 있음)

import CustomComponent from "./02JSX/CustomComponent" // ./02JSX/CustomComponent안에 있는 default component 

import { Component_Event_01, Component_Event_02, Component_Event_03 } from './02JSX/03_Event';

function App() {
  // State 
  const footerState = "Footer State..."
  const headerState = "Header State..."


  return (
    <div className="App">
      <header className='gnb' style={{height:"100px", backgroundColor:"red"}}>    
        
        <h1>{headerState}</h1>  
      </header>
      <header>

      </header>
      <main>
        
          <seciton>

          
            <h1>01_Basic</h1>
            <div>

              <div> 리액트 Element1함수
                <Element1 />
              </div>

              <div> 리액트 Element2함수
                <Element2 />
              </div>

              <div> 리액트 Element3함수
                <Element3 auth={"ROLE_USER"} name={"홍길동"} />
                <Element3 auth={"ROLE_ADMIN"} name={"티모"} />
              </div>

              <hr />

              <div> 리액트 Element4함수
                <Element4 auth={"ROLE_USER"} name={"이노"} />
                <Element4 auth={"ROLE_ADMIN"} name={"헤렌~!"} />
              </div>

              <hr />

              <div> 리액트 Element5함수(리스트로 불러오기)
                <Elemnet5 list={["aaa", "bbb", "ccc", "ddd"]} />
              </div>

              <hr />

              <div> 리액트 default함수 불러오기
                <Basic_01.DefaultComponent1 />
                <Basic_01.DefaultComponent2 />
              </div>

            </div>
          </seciton>
        
        
        <section>
        <hr />
        <h1>02_Custom_Component</h1>

        <div> CustomComponent의 deaultComponent 불러오기
          <CustomComponent />
        </div>
        </section>

        <hr />
        <section>

          <h1>03_Event_Handler</h1>
          <div> 03_Basic의 Component_Event_01, Component_Event_02(클릭 이벤트)불러오기
          <Component_Event_01 />
          <Component_Event_02 />
          <Component_Event_03 />
        </div>
          
        </section>



      </main>

      <footer>


      </footer>

    </div>

  );
}

export default App;
