import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
          <Link to={"/"}>Home</Link>
          {/*<Link to={"/lifecycle"}>LifeCycle</Link>*/}
          {/*<Link to={"/phone"}>Phone</Link>*/}
          <Link to={"/state"}>State</Link>
          <Link to={"/effect"}>Effect</Link>
          <Link to={"/ref"}>Ref</Link>
          <Link to={"/hook"}>Hook</Link>
          <Link to={"/context"}>Context</Link>
          <Link to={"/reducer"}>Reducer</Link>
          <Link to={"/memo"}>Memo</Link>
          <Link to={"/debounce"}>Debounce</Link>
          <Link to={"/throttle"}>Throttle</Link>
        </header>
    );
};

export default Header;