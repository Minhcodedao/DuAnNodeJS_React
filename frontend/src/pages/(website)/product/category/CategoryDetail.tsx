import ProductList from "@/components/ProductList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["CATEGORY_DETAIL", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/categories/${id}`
      );
      return data;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">
              Danh mục : {data.category.name}
            </h2>
          </div>
          <div className="section0-body">
            <ProductList data={data.products}/>
          </div>
        </div>
      </section>
    </>
  );
};
export default CategoryDetail;
