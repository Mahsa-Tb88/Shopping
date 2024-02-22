import React, { useEffect, useState } from "react";
import "./products.scss";
import { getProducts } from "../../../utils/api";
export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const timeOut = setTimeout(fetchProducts, 20);
    return () => clearTimeout(fetchProducts);
  }, []);

  async function fetchProducts() {
    const result = await getProducts(1, 6);
    console.log(result.body);
    if (result.success) {
      setProducts(result.body);
    } else {
    }
  }
  return (
    <div className="row">
      {products.map((p) => {
        return <div className="col-4">{p.title}</div>;
      })}
    </div>
  );
}
