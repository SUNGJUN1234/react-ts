import {useEffect, useState} from "react";
import {useDebounce} from "../hooks/useDebounce.ts";

function fetchDataFromServer(value: string) {
    if (!value) return [];
    console.log("서버로부터 데이터를 가져오는 중...")
    const users = [
        {name: "김철수", age: "16"},
        {name: "이영희", age: "26"},
        {name: "김민수", age: "15"},
        {name: "홍길동", age: "20"},
        {name: "홍민영", age: "45"},
        {name: "김민영", age: "32"},
    ];
    return users.filter(user => user.name.startsWith(value));
}

const DebounceApp = () => {

    const [input, setInput] = useState("");
    const [result, setResult] = useState([{name:'', age:''}])

    const debouncedInput = useDebounce(input, 300);

    useEffect(() => {
        const users = fetchDataFromServer(input);
        setResult(users);
    }, [debouncedInput]);

    return (
        <div className={"container"}>
            <div className={"search-container"}>
                <input
                    placeholder={"여기다 입력하세요"}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <ul>
                    {result.map(user => (
                        <li key={user.name}>
                            <span>{user.name}</span>
                            <span>{user.age}세</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DebounceApp;