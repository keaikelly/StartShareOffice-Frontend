import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MainFullPage from "./pages/mainfullpage";
import Location from "./pages/location";
import RoomInfo from "./pages/roomInfo";
import Community from "./pages/community";
import Header from "./component/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainFullPage />} />{" "}
        <Route path="/location" element={<Location />} />
        <Route path="/roomInfo" element={<RoomInfo />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

//test
