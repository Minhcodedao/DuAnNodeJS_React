import { Banner, Blog, Services, Shop } from "@/components/Index";
import ProductList from "@/components/ProductList";
import { useProductQuery } from "@/common/hooks/useProductQuery";
import { IProduct } from "@/common/types/product";

const HomePage = () => {
  const { data } = useProductQuery();
  const featuredProducts =
    data && data.filter((product: IProduct) => product.featured === true);

  return (
    <>
      <Banner />
      <ProductList products={featuredProducts} limit={4} />
      <div className="container">
        <hr />
      </div>
      <Shop />s
      <Blog />
      <Services />
    </>
  );
};

export default HomePage;
