import {Link} from "react-router-dom";

const MemoApp = () => {
    return (
        <div>
            <Link to={"/memo/1"}>React memo</Link><br/>
            <Link to={"/memo/2"}>React memo + useMemo</Link><br/>
            <Link to={"/memo/3"}>React memo + useCallback</Link><br/>
        </div>
    );
};

export default MemoApp;