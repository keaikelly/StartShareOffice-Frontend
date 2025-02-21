import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MainFullPage from "./pages/mainfullpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFullPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
