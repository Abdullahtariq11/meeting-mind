import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ActionItemPage from "./Pages/ActionItemPage";
import DashboardPage from "./Pages/DashboardPage";
import LandingPage from "./Pages/LandingPage";
import SettingPage from "./Pages/SettingPage";
import UploadMeetingPage from "./Pages/UploadMeetingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/DashboardPage" element={<DashboardPage />} />
          <Route path="/UploadMeetingPage" element={<UploadMeetingPage />} />
          <Route path="/ActionItemPage" element={<ActionItemPage />} />
          <Route path="/SettingPage" element={<SettingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;