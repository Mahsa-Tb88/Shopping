import React, { useEffect, useState } from "react";
import "./productsAdmin.scss";
import { FaPlus } from "react-icons/fa6";
import { getProducts, removeProductById } from "../../../utils/api";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useAppContext } from "../../../context/AppContext";
import { useSearchParams } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
export default function ProductsAdmin() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const { appState, appDispatch } = useAppContext();
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams("");

  useEffect(() => {
    setPage(searchParams.get("page"));
    const timeOut = setTimeout(fetchProducts, 20);
    return () => clearTimeout(timeOut);
  }, [page]);

  let numOfPage = 1;

  async function fetchProducts() {
    setIsLoading(true);
    const result = await getProducts(page);
    console.log(result);
    if (result.success) {
      setLoadingError(false);
      setProducts(result.body);
      setTotalProducts(result.totalProducts.all);
    } else {
      setLoadingError(true);
    }
    setIsLoading(false);
  }

  numOfPage = Math.ceil(parseInt(totalProducts) / 6);

  async function removeProductHandler(id) {
    const result = await removeProductById(id);
    if (result.success){
      console.log(result)
    }
  }
  return (
    <div className="productsAdmin">
      {isLoading ? (
        <div className="fs-2 text-center loadingProductsAdmin">
          <p>Loading ...</p>
          <p className=" spinner spinner-grow"></p>
        </div>
      ) : loadingError ? (
        <div className="text-center loadingProductsAdmin">
          <p className="fs-1">Error Connection</p>
          <button className="btn-tryAgain fs-3" onClick={() => fetchProducts()}>
            Try Again
          </button>
        </div>
      ) : (
        <div className=" px-4 py-5">
          <h1>Manage Products</h1>
          <div className="addProduct d-flex justify-content-center align-items-center">
            <button className="addProductBtn">Add Products</button>
            <FaPlus className="iconPlusProduct" />
          </div>
          <div>
            {products.length ? (
              <div>
                <table className="table table-bordered table-striped text-center my-5">
                  <thead className="table-dark">
                    <tr className="table-row">
                      <th scope="col" className="fs-3">
                        Row
                      </th>
                      <th scope="col" className="fs-3">
                        Title
                      </th>
                      <th scope="col" className="fs-3">
                        Category
                      </th>
                      <th scope="col" className="fs-3">
                        Price
                      </th>

                      <th scope="col" className="fs-3">
                        Operation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p, i) => {
                      return (
                        <tr key={p.id} className="table-row">
                          <th scope="row" className="fs-5">
                            {i + 1}
                          </th>
                          <td>
                            <span className=" fs-4 px-2">{p.title}</span>
                          </td>
                          <td className="fs-4">{p.categoryTitle}</td>

                          <td className="fs-4">$ {p.price}</td>
                          <td>
                            <div className=" d-flex justify-content-center align-items-center">
                              <span
                                className="operation-trash d-flex justify-content-center align-items-center   me-5"
                                onClick={() => removeProductHandler(p.id)}
                              >
                                <FaRegTrashAlt className="fs-4" />
                              </span>
                              <span className="operation-edit  d-flex justify-content-center align-items-center ">
                                <FaRegEdit className="fs-4" />
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <PaginationProducts
                  numOfPage={numOfPage}
                  page={page}
                  setPage={setPage}
                />
              </div>
            ) : (
              <p className="text-center cardEmpty fs-2">
                Your Product is empty
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function PaginationProducts({ numOfPage, setPage, page }) {
  const [searchParams, setSearchParams] = useSearchParams("");

  let pages = [];
  const prevClasses = ["page-link", page == 1 ? "disabled" : ""].join(" ");
  const nextClasses = ["page-link", page == numOfPage ? "disabled" : ""].join(
    " "
  );
  function pageHandler(i) {
    setPage(i);
    setSearchParams({ page: i });
  }
  function pageFirstHandler() {}
  function pageLastHandler() {}
  for (let i = 1; i <= numOfPage; i++) {
    pages.push(
      <i
        key={i}
        className={"page-link " + (page == i ? "active" : "")}
        onClick={() => pageHandler(i)}
      >
        <span className="page-Item">{i}</span>
      </i>
    );
  }

  if (numOfPage <= 1) {
    return;
  }

  return (
    <nav className=" d-flex justify-content-center align-items-center paginate pagination">
      <ul className="d-flex justify-content-center align-items-center">
        <i className={prevClasses} onClick={() => pageFirstHandler()}>
          <span className="page-Item">
            <FaAngleDoubleLeft />
          </span>
        </i>
        {pages}
        <i className={nextClasses} onClick={() => pageLastHandler()}>
          <span className="page-Item">
            <FaAngleDoubleRight />
          </span>
        </i>
      </ul>
    </nav>
  );
}
