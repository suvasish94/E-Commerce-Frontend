import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddProducts from "./Components/AddProducts";
import UpdateProducts from "./Components/UpdateProducts";
import Protected from "./Components/Protected"
import ProductList from "./Components/ProductList";
import SearchProduct from "./Components/SearchProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/add" element={<Protected Cmp={AddProducts}/>} />
          <Route path="/update/:id" element={<Protected Cmp={UpdateProducts}/>} />
          {/* <Route path="/update" element={<Protected Cmp={UpdateProducts}/>} /> */}
          <Route path="/search" element={<Protected Cmp={SearchProduct}/>} />
          <Route path="/" element={<Protected Cmp={ProductList}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
