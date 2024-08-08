import {useCallback, useState} from 'react';
import Child3 from "./Child3.tsx";

const Parent3 = () => {

    const [parentAge, setParentAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    };

    console.log("부모 컴포넌트가 랜더링 되었습니다.");
    
    const tellMe = useCallback(() => {
        console.log("사랑해");
    },[])



    return (
        <div style={{border: "2px solid navy", padding: "10px"}}>
            <h1>부모</h1>
            <p>age: {parentAge}</p>
            <button onClick={incrementParentAge}>부모 나이 증가</button>
            <Child3 name={"홍길동"} tellMe={tellMe}/>
        </div>
    );
};

export default Parent3;