import {ChangeEvent, useState} from "react";

const heavyWork = () => {
    console.log("엄청 무거운 작업");
    return ["조성준", "김철수"];
}

const StateApp = () => {

    // callback 을 사용해 초기 세팅 무거운 작업을 1번만 실행할 수 있도록 구성
    const [_, setNames] = useState(()=>{
        return heavyWork();
    })
    const [input, setInput] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleUpload = () => {
        setNames((prevState) => {
            console.log("이전 state", prevState);
            return [input, ...prevState];
        })
    }

    return (
        <div>
            <h1>이름 추가</h1>
            <input type="text" onChange={handleChange} value={input} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default StateApp;