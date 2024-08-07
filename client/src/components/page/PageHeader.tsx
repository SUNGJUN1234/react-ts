import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext.ts";

const PageHeader: React.FC = () => {

    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error("ThemeContext is not provided");
    }

    const {isDark} = themeContext;

    return (
        <header
            className={"header"}
            style={{
                backgroundColor: isDark? "black" : "lightgray",
                color: isDark ? "white" : "black",

            }}
        >
            <h1>Hello World!</h1>
        </header>
    );
};

export default PageHeader;