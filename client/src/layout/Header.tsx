import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
          <Link to={"/"}>Home</Link>
          {/*<Link to={"/lifecycle"}>LifeCycle</Link>*/}
          {/*<Link to={"/phone"}>Phone</Link>*/}
          <Link to={"/state"}>State</Link>
          <Link to={"/effect"}>Effect</Link>
          <Link to={"/hook"}>Hook</Link>
        </header>
    );
};

export default Header;