import './App.css'
import {Fragment} from "react";
import MyName from "./MyName";
import Counter from "./Counter.tsx";

function App() {

    const name1 = "react";
    const name2 = "vite";

  return (
    <Fragment>
      {/*<h1>{name1}</h1>*/}
      {/*<h1>{name2}</h1>*/}
      {/*<MyName name={"조성준"} />*/}
      <Counter />
    </Fragment>
  )
}

export default App
