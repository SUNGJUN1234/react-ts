import React, {memo} from 'react';

interface ChildProps {
    name: string,
    age: number
}

const Child:React.FC<ChildProps> = ({name, age}) => {
    console.log("자녀도 랜더링 되었습니다.");
    return (
        <div style={{border: "2px solid powderblue", padding: "10px"}}>
            <h3>자녀</h3>
            <p>name: {name}</p>
            <p>age: {age}</p>
        </div>
    );
};

export default memo(Child);