import ProductList from "@/components/ProductList";
import Category from "@/components/layouts/shop/Category";
import Heading from "@/components/layouts/shop/Heading";
import { Outlet } from "react-router-dom";

const ShopPage = () => {
  return (
    <div>
      <Category />
      <hr />
      <Heading/>
      <ProductList />
    </div>
  );
};

export default ShopPage;
