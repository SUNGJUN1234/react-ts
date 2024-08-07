import Timer from "../components/Timer.tsx";
import {useState} from "react";

const EffectApp = () => {

    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            {showTimer && <Timer/>}
            <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>
    );
};

export default EffectApp;