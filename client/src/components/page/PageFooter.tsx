import React, {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.ts";

const PageFooter: React.FC = () => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error("ThemeContext is not provided");
    }
    const {isDark, setIsDark} = themeContext;

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <footer
            className={"footer"}
            style={{
                backgroundColor: isDark ? "black" : "lightgray"
            }}
        >
            <button className={"button"} onClick={toggleTheme}>
                {isDark? "Light Mode" : "Dark Mode" }
            </button>
        </footer>
    );
};

export default PageFooter;