
const EventComponent_05 = () =>{

    const handleSubmit = (e) => {
        e.preventDefault();     // 전송버튼 눌러도 안 넘어가게 해주는거 html 태그에서 직접 onsubmit = {false로 바꿔도 됌}
        console.log("submit...");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action={"/test.jsp"}>
                <input type = "text" /><br/>
                <button type = "submit">전송</button>
            </form>
        </div>
    )
  
}

export default EventComponent_05