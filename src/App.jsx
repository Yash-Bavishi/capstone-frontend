import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingFile from "./Components/LandingPage/LandingFile";
import LoginSignup from './Components/LoginSignup/LoginSignup';
import ReportPage from "./Components/ReportPage/ReportPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />}></Route>
        <Route path="/landingpage" element={<LandingFile />}></Route>
        <Route path="/reportpage" element={<ReportPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
