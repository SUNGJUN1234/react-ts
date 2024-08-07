import {useInput} from "../hooks/useInput.ts";
import {useFetch} from "../hooks/useFetch.ts";

const consoleMessage = (value: string) => {
    console.log(value);
}
const alertMessage = (value: string) => {
    alert(value);
}
const baseUrl = "https://jsonplaceholder.typicode.com";

const HookApp = () => {

    const [inputValue, handleChange, handleSubmit] = useInput(
        '',
        consoleMessage
    );
    const [inputValue2, handleChange2, handleSubmit2] = useInput(
        '',
        alertMessage
    );
    const {data, fetchUrl} = useFetch(baseUrl, "users")


    return (
        <div>
            <h1>useInput</h1>
            <div>
                console: <input type="text" onChange={handleChange} value={inputValue} />
                <button onClick={handleSubmit}>confirm</button>
            </div>
            <div>
                alert: <input type="text" onChange={handleChange2} value={inputValue2} />
                <button onClick={handleSubmit2}>confirm</button>
            </div>
            <h1>useFetch</h1>
            <button onClick={() => fetchUrl("users")} >Users</button>
            <button onClick={() => fetchUrl("posts")} >Posts</button>
            <button onClick={() => fetchUrl("todos")} >Todos</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default HookApp;