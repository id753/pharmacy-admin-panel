import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import SuppliersPage from "./pages/SuppliersPage/SuppliersPage";
import CustomersPage from "./pages/CustomersPage/CustomersPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SharedLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="suppliers" element={<SuppliersPage />} />
            <Route path="customers" element={<CustomersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
