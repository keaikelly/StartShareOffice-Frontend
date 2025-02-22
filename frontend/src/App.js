import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MainFullPage from "./pages/mainfullpage";
import Location from "./pages/location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFullPage />} />{" "}
        <Route path="/location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
