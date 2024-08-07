import {useReducer, useState} from "react";
import Student from "../components/reducer/Student.tsx";

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용
const reducer = (state, action) => {
    console.log("reducer~~", state, action);
    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;
    }
}

const initialState = {
    count: 0,
    students: []
}

const studentsReducer = (state, action) => {
    switch (action.type) {
        case "add-student":
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name: name,
                isHere: false,
            }
            return {
                count: state.count + 1,
                students: [
                    ...state.students,
                    newStudent
                ]
            };
        case "delete-student":
            return {
                count: state.count - 1,
                students: state.students.filter((student) => student.id !== action.payload.id)
            }
        case "check-student":
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if (student.id === action.payload.id) {
                        return {
                            ...student,
                            isHere: !student.isHere
                        }
                    }
                    return student
                })
            }
        default:
            return state;
    }
}

const ReducerApp = () => {
    // 은행
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);

    // 출석부
    const [name, setName] = useState('')
    const [studentInfo, studentsDispatch] = useReducer(studentsReducer, initialState);

    return (
        <div>
            <h2>useReducer 은행에 오신것을 환영합니다</h2>
            <p>잔고: {money} 원</p>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                step={"1000"}
            />
            <button
                onClick={() => {
                    dispatch({
                        type: "deposit",
                        payload: number,
                    });
                }}
            >예금</button>
            <button
                onClick={() => {
                    dispatch({
                        type: "withdraw",
                        payload: number,
                    });
                }}
            >출금</button>
            
            <h2>출석부</h2>
            <p>총 학생 수: {studentInfo.count}</p>
            <input 
                type="text"
                placeholder={"이름을 입력하세요"}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => {
                    studentsDispatch({type: 'add-student', payload: {name}})
                }}
            >추가</button>
            {studentInfo.students.map((student) => {
                return <Student
                    key={student.id}
                    name={student.name}
                    dispatch={studentsDispatch}
                    id={student.id}
                    isHere={student.isHere}
                />
            })}
        </div>
    );
};

export default ReducerApp;