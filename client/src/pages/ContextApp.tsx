import {useState} from "react";
import Page from "../components/Page.tsx";
import "../components/page/page.module.css";
import {ThemeContext} from "../contexts/ThemeContext.ts";

const ContextApp = () => {

    const [isDark, setIsDark] = useState(false);

    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page />
        </ThemeContext.Provider>
    );
};

export default ContextApp;