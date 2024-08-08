import {useState} from "react";
import {useThrottle} from "../hooks/useThrottle.ts";

const hackLottoNumbers = () => {
    console.log("로또번호 해킹중...");
    const lottoNumbers = [];
    for (let i = 0; i < 6; i++) {
        const number = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.push(number);
    }
    return lottoNumbers;
}

const ThrottleApp = () => {

    const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]);

    const handleClick = useThrottle(() => {
        setLottoNumbers(hackLottoNumbers);
    }, 1000);
    
    return (
        <div className={"container"}>
            <h1 className={"title"}>로또 번호 추출기</h1>
            <button className={"button"} onClick={handleClick}>
                번호 맞추기
            </button>
            <div className={"numbers"}>
                {lottoNumbers.map((number, idx) => (
                    <div key={idx} className={"number"}>
                        {number}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ThrottleApp;