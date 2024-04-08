
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/(website)/home/home";
import ShopPage from "../pages/Shop";
import AboutPage from "../pages/(website)/about/about";
import ContactPage from "../pages/(website)/contact/contact";
import LayoutWebsite from "../components/layouts/LayoutWebsite";
import DetailProduct from "../pages/(website)/product/detail/detail-product";
import LayoutAdmin from "../components/layouts/LayoutAdmin";
import NotFound from "../pages/(website)/404/notFound";
import ProductAdd from "../pages/(dashboard)/product/_components/add";
import ProductEdit from "../pages/(dashboard)/product/_components/edit";
import { Toaster } from "@/components/ui/toaster";
import CategoryDetail from "../pages/(website)/product/category/CategoryDetail";
import CartPage from "../pages/(website)/cart/cart";
import SignIn from "../pages/(website)/(auth)/signin";
import SignUp from "../pages/(website)/(auth)/signup";
import PrivateRoute from "./PrivateRoute";
import ProductManagement from "@/pages/(dashboard)/product/pages";
import OrderPage from "@/pages/(website)/order/page";
const Router = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<LayoutWebsite />}>
      <Route index element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="products/:id" element={<DetailProduct />} />
      <Route path="shop/categories/:id" element={<CategoryDetail />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="order" element={<OrderPage />} />
    </Route>
    <Route path="admin" element={
        <PrivateRoute>
    <LayoutAdmin />
    </PrivateRoute>}
    >
      <Route path="products" element={<ProductManagement />} />
      <Route path="products/add" element={<ProductAdd />} />
      <Route path="products/:id/edit" element={<ProductEdit />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
  </>
  )
}

export default Router