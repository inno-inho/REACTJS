
// 01
function handleClick_01(){
    console.log("clicked_01...")
}


export function Component_Event_01(){
    
    return(         // react에서는 return값에 부모태그가 없으면 안된다
        <div>
            <h2>Component_Event_01...</h2>
            <button onClick={handleClick_01}>Click_Me</button>
        </div>
    ) 
}

export function Component_Event_02(){   // 함수랑 리턴값 같이 쓰기
    
    // State

    // Handler
    function handleClick_02(){
        console.log("clicked_02...")
    }

    return(         
        <div>
            <h2>Component_Event_02...</h2>
            <button onClick={handleClick_02}>Click_Me</button>
        </div>
    ) 
}


//
export function Component_Event_03(){   // 함수랑 리턴값 같이 쓰기
    
    // State

    // Handler
    function handleKeyDown(event){
        console.log("clicked_03...", event.target.value);
    }

    return(         
        <div>
            <h2>Component_Event_03...</h2>
            {/* onKeyDown -> 자판이 눌릴 시 반응 */}
            <input type = "text" onKeyDown={handleKeyDown}></input>     
        </div>
    ) 
}