import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './pages/Home';
import LettersList from './pages/LettersList';
import AboutUs from './pages/AboutUs';
import Orders from './pages/Orders';
import LetterDetails from './pages/LetterDetails';

const App = () => {

    return (
        <div className="container">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/letters" element={<LettersList />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/letters/:id" element={<LetterDetails />} />
            </Routes>
        </div>
    );
}

export default App;
