
const EventComponent_04 = () =>{

    const handleChange = (e) => {
        console.log("onChange...", e)
        const {name, value, type, checked} = e.target;
        console.log(name, value, type, checked)
    }

    return(
        <div>
            <input type = "text" onChange={handleChange} /><br/>
            <input type = "checkbox" onChange={handleChange}  /> 체크 박스<br/>
            <input type = "radio" name = "radio" onChange={handleChange} />선택 1<br/>
            <input type = "radio" name =  "radio"  onChange={handleChange}/>선택 2<br/>
        </div>
    )
 
}

export default EventComponent_04