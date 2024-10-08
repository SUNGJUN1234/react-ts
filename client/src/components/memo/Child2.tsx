import React, {memo} from 'react';

interface Child2Props {
    name: {
        lastName: string,
        firstName: string,
    },
}

const Child2:React.FC<Child2Props> = ({name}) => {
    console.log("자녀도 랜더링 되었습니다.");
    return (
        <div style={{border: "2px solid powderblue", padding: "10px"}}>
            <h3>자녀</h3>
            <p>성: {name.lastName}</p>
            <p>이름: {name.firstName}</p>
        </div>
    );
};

export default memo(Child2);