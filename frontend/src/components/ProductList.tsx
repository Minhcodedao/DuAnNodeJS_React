import { IProduct } from "@/common/types/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "@/services/product";
import axios from "axios";
import { useLocalStorage } from "@/common/hooks/useStorage";

type ProductListProps = {
  featured?: boolean;
  data?: IProduct[];
  limit?: number;
};

const ProductList = ({ featured, data, limit }: ProductListProps) => {
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: getAllProducts,
  });
  const { mutate } = useMutation({
    mutationFn: async ({ productId, quantity }: any) => {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/carts/add-to-cart`,
        {
          userId,
          productId,
          quantity,
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart", userId],
      });

      // Chuyển hướng sang trang cart sau khi thêm vào giỏ hàng thành công
      window.location.href = "/cart";
    },
  });

  const filteredProducts = useMemo(() => {
    return featured
      ? products?.filter((product: IProduct) => product.featured === featured)
      : data || products;
  }, [featured, data, products]);

  // Áp dụng giới hạn số lượng sản phẩm
  const limitedProducts = limit
    ? filteredProducts?.slice(0, limit)
    : filteredProducts;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <section className="news">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-heading__title">New</h2>
        </div>
        <div className="product-list">
          {limitedProducts?.map((product: IProduct, index: number) => (
            <div className="product-item" key={index}>
              <div className="product-image">
                <img
                  src={product.image}
                  alt=""
                  className="product__thumbnail"
                />
                <span className="product-sale">{product.discount}%</span>
              </div>
              <div className="product-info">
                <h3 className="product__name">
                  <Link
                    to={`/products/${product._id}`}
                    className="product__link"
                  >
                    {product.name}
                  </Link>
                </h3>
                <a href="" className="product__category">
                  {product.description}
                </a>
                <div className="product-price">
                  <span className="product-price__new">
                    {product.price - product.price * (product.discount / 100)}
                  </span>
                  <span className="product-price__old">{product.price}</span>
                </div>
              </div>
              <div className="product-actions">
                <Link
                  to={`/products/${product._id}`}
                  className="btn product-action__quickview"
                >
                  Quick View
                </Link>
                <button
                  className="btn product-action__addtocart"
                  onClick={() =>
                    mutate({ productId: product._id, quantity: 1 })
                  }
                >
                  <a href="">Add To Cart</a>
                </button>
                <div className="product-actions-more">
                  <span className="product-action__share">Share</span>
                  <span className="product-action__compare">Compare</span>
                  <span className="product-action__like">Like</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
