import { getAllProductByID } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => await getAllProductByID(id as string),
  });

  const { data: relatedProduct, isLoading: relatedProductLoading } = useQuery({
    queryKey: ["RELATED_PRODUCT", id],
    queryFn: async () => {
      if (product && product.category) {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/products/${product.category}/related`
        );
        return data;
      } else {
        return [];
      }
    },
    enabled: !!product && !!product.category,
  });

  if (isLoading || relatedProductLoading) return <p>...Loading</p>;
  return (
    <div>
      {product?.name}
      <hr />
      <h3>Sản phẩm liên quan</h3>
      {relatedProduct.map((item: any) => (
        <div key={item._id}>
          <Link to={`products/${item._id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default DetailProduct;
