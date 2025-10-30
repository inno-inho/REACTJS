
const Component_03 = ({items}) => {
    console.log("item.length: ", items.length);

    return (
        <ul>
        
            {/* item의 길이가 0보다 크면 오른쪽 연산을 처리함 */}
            {items.length > 0 && items.map((item, idx) => {
                return (
                    <li key = {idx}> {item} </li>
                )
            })
            } 
        </ul>
    )

}
    
    
    

export default Component_03