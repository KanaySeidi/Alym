import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Buy from "./pages/Stage/BuyPage/Buy";
import Fundam from "./pages/Stage/FundamPage/Fundam";
import InRoom from "./pages/Stage/InRoomPage/InRoom";
import Maket from "./pages/Stage/MaketPage/Maket";
import Roof from "./pages/Stage/RoofPage/Roof";
import Engineer from "./pages/Services/EngineerSer/Engineer";
import FasadSer from "./pages/Services/FasadSer/FasadSer";
import FixSer from "./pages/Services/FixSer/FixSer";
import FundamSer from "./pages/Services/FundamSer/FundamSer";
import NavesSer from "./pages/Services/NavesSer/NavesSer";
import ProjectSer from "./pages/Services/ProjectSer/ProjectSer";
import RoofSer from "./pages/Services/RoofSer/RoofSer";
import WallSer from "./pages/Services/WallSer/WallSer";
import ScrollToTop from "./utils/scroll";
import Footer from "./components/Footer/Footer";

const PATHES = {
  "/buy": 1,
  "/wall": 1,
  "/inroom": 1,
  "/maket": 1,
  "/roof": 1,
  "/services1": 1,
  "/services2": 1,
  "/services3": 1,
  "/services4": 1,
  "/services5": 1,
  "/services6": 1,
  "/services7": 1,
  "/services8": 1,
};

function App() {
  const location = useLocation();
  ScrollToTop();
  return (
    <div className="App">
      {!PATHES[location.pathname] ? <Navbar /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wall" element={<Fundam />} />
        <Route path="/inroom" element={<InRoom />} />
        <Route path="/maket" element={<Maket />} />
        <Route path="/roof" element={<Roof />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/services1" element={<Engineer />} />
        <Route path="/services2" element={<FasadSer />} />
        <Route path="/services3" element={<FixSer />} />
        <Route path="/services4" element={<FundamSer />} />
        <Route path="/services5" element={<NavesSer />} />
        <Route path="/services6" element={<ProjectSer />} />
        <Route path="/services7" element={<RoofSer />} />
        <Route path="/services8" element={<WallSer />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
