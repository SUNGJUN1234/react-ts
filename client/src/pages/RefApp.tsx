import {useEffect, useRef, useState} from 'react';

const RefApp = () => {

    // why useRef
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    // 컴포넌트가 랜더링 될때마다 다음 변수 값은 초기 값으로 초기화 된다
    let countVar = 3

    console.log("랜더링");

    const increaseCountState = () => {
        setCount(count + 1);
    };

    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log("Ref: ", countRef.current);
    };

    const increaseCountVar = () => {
        countVar++;
        console.log("Var: ", countVar)
    }

    // useRef DOM
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (!inputRef.current) return;
        inputRef.current.focus();
    }, []);

    const login = () => {
        if (!inputRef.current) return;
        alert(`환영합니다.\n${inputRef.current.value} 님`);
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>Why useRef?</h1>
            <p>State: {count}</p>
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <button onClick={increaseCountState}>State Up</button>
            <button onClick={increaseCountRef}>Ref Up</button>
            <button onClick={increaseCountVar}>Var Up</button>

            <h1>useRef DOM</h1>
            <div>
                <input ref={inputRef} placeholder={"username"} />
                <button onClick={login}>로그인</button>
            </div>
        </div>
    );
};

export default RefApp;