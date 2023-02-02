import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Buy from "./pages/Stage/BuyPage/Buy";
import Fundam from "./pages/Stage/FundamPage/Fundam";
import InRoom from "./pages/Stage/InRoomPage/InRoom";
import Maket from "./pages/Stage/MaketPage/Maket";
import Roof from "./pages/Stage/RoofPage/Roof";

const PATHES = {
  "/buy": 1,
  "/wall": 1,
  "/inroom": 1,
  "/maket": 1,
  "/roof": 1,
};

function App() {
  const location = useLocation();
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
      </Routes>
    </div>
  );
}

export default App;
