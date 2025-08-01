import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './pages/home';
import Letters from './pages/letters';
import AboutUs from './pages/aboutus';

const App = () => {

  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
