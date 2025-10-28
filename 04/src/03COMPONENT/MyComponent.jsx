import {userState, useEffect, useState} from "react"


const MyComponent = () => {
    // State
    // let count = 0

    const [count, setCount] = useState(1)
    // handler
    const handleClick = () => {
        setCount(count + 1);    // 비동기 함수
        // console.log(count);
    }
    
    // 최초 1회 실행(1회만 랜더링)
    useEffect(() => {
        console.log("init setting");
    }, [])

    // count state가 변경될때마다 실행
    useEffect(() => {
        console.log("count state changed..", count);
    }, [count])     // {상태값이 바뀔 때 동작값}, [감시할 상태변수]
    return (
        <>
            <h2>MyComponent...</h2>
            <button onClick={handleClick}>Btn Count : {count} </button>
        </>
    )
}

export default MyComponent