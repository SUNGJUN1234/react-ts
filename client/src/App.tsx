import {BrowserRouter, Route, Routes} from "react-router-dom";
import LifeCycleApp from "./pages/LifeCycleApp.tsx";
import PhoneApp from "./pages/PhoneApp.tsx";
import HookApp from "./pages/HookApp.tsx";
import Header from "./layout/Header.tsx";
import IndexApp from "./pages/IndexApp.tsx";
import StateApp from "./pages/StateApp.tsx";
import EffectApp from "./pages/EffectApp.tsx";

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
                    <Route path="/hook" element={<HookApp />} />
                </Routes>
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    )
}

export default App;