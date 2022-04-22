import "./index.scss";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Analytics from "./pages/Analytics/Analytics";

function App() {

  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Analytics />} />
        <Route path="/categories" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
