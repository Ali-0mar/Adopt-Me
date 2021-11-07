import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Header from "./components/Header/header";
import Details from "./Pages/Deatails";
import SearchParams from "./components/searchParams/searchParams";
import Header from "./components/Header/header";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Link to="/">
                    <Header />
                </Link>
                <Routes>
                    <Route path="/" element={<SearchParams />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
