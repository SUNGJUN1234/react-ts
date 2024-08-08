import {BrowserRouter, Route, Routes} from "react-router-dom";
import LifeCycleApp from "./pages/LifeCycleApp.tsx";
import PhoneApp from "./pages/PhoneApp.tsx";
import HookApp from "./pages/HookApp.tsx";
import Header from "./layouts/Header.tsx";
import IndexApp from "./pages/IndexApp.tsx";
import StateApp from "./pages/StateApp.tsx";
import EffectApp from "./pages/EffectApp.tsx";
import RefApp from "./pages/RefApp.tsx";
import ContextApp from "./pages/ContextApp.tsx";
import ReducerApp from "./pages/ReducerApp.tsx";
import MemoApp from "./pages/MemoApp.tsx";
import Parent from "./components/memo/Parent.tsx";
import Parent2 from "./components/memo/Parent2.tsx";
import Parent3 from "./components/memo/Parent3.tsx";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<IndexApp />} />
                    <Route path="/lifecycle" element={<LifeCycleApp />} />
                    <Route path="/phone" element={<PhoneApp />} />
                    <Route path="/state" element={<StateApp />} />
                    <Route path="/effect" element={<EffectApp />} />
                    <Route path="/ref" element={<RefApp />} />
                    <Route path="/hook" element={<HookApp />} />
                    <Route path="/context" element={<ContextApp />} />
                    <Route path="/reducer" element={<ReducerApp />} />
                    <Route path="/memo" element={<MemoApp />} />
                    <Route path="/memo/1" element={<Parent />} />
                    <Route path="/memo/2" element={<Parent2 />} />
                    <Route path="/memo/3" element={<Parent3 />} />
                </Routes>
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    )
}

export default App;