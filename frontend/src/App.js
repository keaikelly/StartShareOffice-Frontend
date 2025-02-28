import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MainFullPage from "./pages/mainfullpage";
import Location from "./pages/location";
import RoomInfo from "./pages/roomInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFullPage />} />{" "}
        <Route path="/location" element={<Location />} />
        <Route path="/roomInfo" element={<RoomInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
