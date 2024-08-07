import React, {useState} from "react";

type SubmitAction = (value: string) => void;

export const useInput = (initialValue: string, submitAction: SubmitAction) => {

    const [inputValue, setInputValue] = useState<string>(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = () => {
        setInputValue("");
        submitAction(inputValue);
    }

    return [
        inputValue,
        handleChange,
        handleSubmit
    ] as const
}
