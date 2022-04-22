import "./index.scss";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Analytics from "./pages/Analytics/Analytics";
import About from "./pages/About/About";

function App() {

  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Analytics />} />
        <Route path="/categories" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
