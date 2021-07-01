import { useState } from "react";

export default ({ list }) => {
    let [index, setIndex] = useState(0);

    function handleClick() {
        setIndex((index+1) % list.length);
        console.log(index);
    }

    return (
        <ul onClick={handleClick} style={{padding:"10px", margin:"10px"}}>
            <li>{list[index]}</li>
        </ul>
    )
}