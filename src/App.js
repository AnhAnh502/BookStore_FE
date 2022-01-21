import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Bought from './pages/Bought';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddProduct from './pages/AddProduct';

export default function App() {
  return (
    <Container fluid className="App bg-light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bought" element={<Bought />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add" element={<AddProduct />} />  
        <Route 
          path="*"
          element={
            <p>There's nothing here!</p>
          }
        />
      </Routes>    
    </Container>
  );
}
