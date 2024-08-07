import React, {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.ts";

const PageContent: React.FC = () => {

    const themeContext = useContext(ThemeContext);
    if (!themeContext) {
        throw new Error("ThemeContext is not provided");
    }
    const {isDark} = themeContext;

    return (
        <div
            className={"content"}
            style={{
                backgroundColor: isDark ? "black" : "white",
                color: isDark ? "white" : "black"
            }}
        >
            <p>좋은 하루 되세요.</p>
        </div>
    );
};

export default PageContent;
