import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Analytics from "./pages/Analytics/analytics";
import Sales from "./pages/Sales/sales";
import Transactions from "./pages/Transactions/Transactions";
import ReportsUser from "./pages/ReportsUser/ReportsUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          
          <Route path="/users" element={<UserList />}/>
            
          <Route path="/user/:userId" element={<User />}/>

          <Route path="/analytics" element={<Analytics />}/>
          <Route path="/sales" element={<Sales />}/>
          <Route path="/transactions" element={<Transactions />}/>
          <Route path="/report" element={<ReportsUser />}/>
           
          <Route path="/newUser" element={<NewUser />}/>
           
          <Route path="/products" element={<ProductList />}/>
            
          <Route path="/product/:productId" element={<Product />}/>
            
          <Route path="/newproduct" element={<NewProduct />}/>
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;