import {useState, useEffect} from "react"


const EventComponent_02 = () =>{
    
    const [str, setStr] = useState("INIT")

    const handleMouseEnter = (e) => {
        console.log("mouse enter ....", e);
    
        setStr("Mouse Enter")
    }

    const handleMouseLeave = (e) => {
        console.log("mouse leave ....", e);
    
        setStr("Mouse Leave")
    }

    return(

        <div 
            className="box1" 
            style={{width:"150px", height:"150px", border:"1px solid"
               
                }}
            onMouseEnter={handleMouseEnter}    
            onMouseLeave={handleMouseLeave} 
        >
            {str}
        </div>
    )
   
}

export default EventComponent_02