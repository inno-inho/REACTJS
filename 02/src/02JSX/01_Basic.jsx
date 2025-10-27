// 01 기본 JSX 요소 생성
export const Element1 = () => {return <h2>Hello World -1</h2>}   // export 외부에서도 쓸 수 있게 해주는 코드

// 02 Function 에약어로 만들기
export function Element2(){
    
    return <h2>HEllo World -2</h2>
}

// 03 인자값 받는 요소 생성(props)
export function Element3(props){
    console.log("EL3's props: ", props);

    // 외부로부터 받는 인자를 페이지에 보여주는 부분
    if(props.auth === "ROLE_ADMIN"){
        return <h2>관리자님 환영합니다, NAME = {props.name} </h2>
    }else if(props.auth === "ROLE_USER"){
        return <h2>유저님 환영합니다, NAME = {props.name}</h2>
    }
}

// 04 인자값 받는 요소생성(props) + 구조분해할당
// {auth, name} = props
export function Element4({auth, name}){
    console.log("EL4's attr: ", auth, name);

    // 외부로부터 받는 인자를 페이지에 보여주는 부분
    if(auth === "ROLE_ADMIN"){
        return <h2>관리자님 환영합니다, NAME = {name} </h2>
    }else if(auth === "ROLE_USER"){
        return(
            <h2>유저님 환영합니다, NAME = {name} </h2>      // 한줄이면 소괄호 생략 가능
        ) 
    }
}

// 05 반복문 사용하기
export const Elemnet5 = (props) => {
    console.log("El5's props: ", props);

    const list = props.list;        // ["aaa", "bbb", "ccc", "ddd"]
    return( 
        <ul>                               
            {list.map((item, idx) => {  // idx는 인덱스 번호
                return <li key = {idx}>{item}</li>  // 여러개 반복구문 쓸 때에는 태그안에 키 값을 넣어줘야한다  
            })}       
        </ul>
    )
}

// 06 기본 컴포넌트 Export
const DefaultComponent1 = () => {return <h2>DefaultComponent1</h2>}
const DefaultComponent2 = () => {return <h2>DefaultComponent2</h2>}

export default{     // default -> 기본 컴포넌트로 지정하는 예약어
    DefaultComponent1,
    DefaultComponent2
}


