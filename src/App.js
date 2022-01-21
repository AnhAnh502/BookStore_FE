import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Detail from "./components/detailOfBook/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Detail />} />
      </Routes>    
    </div>
  );
}

export default App;
