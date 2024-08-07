import {BrowserRouter, Route, Routes} from "react-router-dom";
import LifeCycleApp from "./pages/LifeCycleApp.tsx";
import PhoneApp from "./pages/PhoneApp.tsx";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/*<Header />*/}
                <Routes>
                    <Route path="/" element={<LifeCycleApp />} />
                    <Route path="/phone" element={<PhoneApp />} />
                </Routes>
                {/*<Footer />*/}
            </div>
        </BrowserRouter>
    )
}

export default App;