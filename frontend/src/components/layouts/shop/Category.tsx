import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const { data: categories } = useQuery({
    queryKey: ["CATEGORY_LIST"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/categories"
      );
      return data;
    },
  });
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">Danh mục sản phẩm</h2>
          </div>
          <div>
            {categories?.map((category: {_id?:number; name: string}) => (
              <div key={category._id}>
                <h3><Link to={`categories/${category._id}`}>{category.name}</Link></h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
