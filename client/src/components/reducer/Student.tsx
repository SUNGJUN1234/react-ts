import React from 'react';

interface StudentProps {
    name: string;
    id: number;
    dispatch: any;
    isHere: boolean;
}

const Student: React.FC<StudentProps> = ({name, id, dispatch, isHere}) => {
    return (
        <div>
            <span
                style={{
                    textDecoration: isHere ? "line-through" : "none",
                    color: isHere ? "gray" : "black",
                }}
                onClick={() => {
                    dispatch({type: "check-student", payload: {id}})
                }}
            >{name}</span>
            <button
                onClick={() => {
                    dispatch({type: "delete-student", payload: {id}})
                }}
            >삭제</button>
        </div>
    );
};

export default Student;