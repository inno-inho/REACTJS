import {useState, useEffect} from "react"

const EventComponent_03 = () =>{

    const [state, setState] = useState("")
    const handleKeyUp = (e) => {
        console.log("keyup..", e.key);
        setState(state + e.key)
    }
    
    const handleKeyDown = (e) => {console.log("keyDown..", e.key);}
    const handleKeyPress = (e) => {console.log("keyPress..", e.key);}

    return(
        <div>
            STATE : {state} <br/>

            KEY UP : <input type = "text" onKeyUp = {handleKeyUp} className="keyUp" /> <br/>
            KEY Down : <input type = "text" onKeyDown={handleKeyDown} /> <br/>
            KEY Press : <input type = "text" onKeyPress={handleKeyPress} /> <br/>
        </div>
    )
}

export default EventComponent_03