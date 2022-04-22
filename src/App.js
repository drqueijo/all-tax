import Sidebar from "./components/Sidebar/Sidebar";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
import {useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Sidebar />
      <Routes>

{/*         <Route path="/" element={<Sidebar />} /> */}
      </Routes>
    </div>
  );
}

export default App;
