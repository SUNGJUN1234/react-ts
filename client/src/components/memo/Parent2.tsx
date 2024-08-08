import {useMemo, useState} from 'react';
import Child2 from "./Child2.tsx";

const Parent2 = () => {

    const [parentAge, setParentAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    };

    console.log("부모 컴포넌트가 랜더링 되었습니다.");

    const name = useMemo(() => {
        return {
            lastName: "홍",
            firstName: "길동",
        }
    }, []);


    return (
        <div style={{border: "2px solid navy", padding: "10px"}}>
            <h1>부모</h1>
            <p>age: {parentAge}</p>
            <button onClick={incrementParentAge}>부모 나이 증가</button>
            <Child2 name={name} />
        </div>
    );
};

export default Parent2;