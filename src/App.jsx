import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import MainContainer from './pages/HomePages/HomePages';
import Converter from "./pages/Converter-page/Converter";


function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<MainContainer />} />
                <Route path="converter" element={<Converter />} />
            </Route>
        </Routes>
    )
}

export default App