import React, { useEffect, useState } from "react";
import "./productsAdmin.scss";
import { FaPlus } from "react-icons/fa6";
import { getProducts, removeProductById } from "../../../utils/api";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useAppContext } from "../../../context/AppContext";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import Pagination from "../../Share/Pagination/Pagination";
export default function ProductsAdmin() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const { appState, appDispatch } = useAppContext();
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams("");

  const navigate = useNavigate();
  let numOfPage;

  useEffect(() => {
    document.title = "Managing Products";
    const page = searchParams.get("page") ?? 1;
    setPage(+page);
  }, [searchParams]);

  useEffect(() => {
    const timeOut = setTimeout(fetchProducts, 20);
    return () => clearTimeout(timeOut);
  }, [page]);

  async function fetchProducts() {
    setIsLoading(true);
    const result = await getProducts(page);
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
    if (!confirm("Are you sure for deletting the product?")) {
      return;
    }
    const t = toast.loading("Deleating...", {
      theme: appState.them,
      style: { fontSize: 15 },
    });
    const result = await removeProductById(id);
    if (result.success) {
      const result = await getProducts(page);
      if (result.success) {
        if (result.body.length == 0 && page > 1) {
          setSearchParams({ page: page - 1 });
        } else {
          setProducts(result.body);
        }
        toast.update(t, {
          render: <p className="fs-4">The category deleted successfully!</p>,
          isLoading: false,
          type: "success",
          autoClose: 2000,
        });
      } else {
        toast.update(t, {
          render: <p className="fs-4">{result.message}</p>,
          isLoading: false,
          type: "error",
          autoClose: 2000,
        });
      }
    } else {
      toast.update(t, {
        render: <p className="fs-4">{result.message}</p>,
        isLoading: false,
        type: "error",
        autoClose: 2000,
      });
    }
  }

  function pageHandler(i) {
    setSearchParams({ page: i });
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
            <Link className="addProductBtn link" to="new">
              Add Products
            </Link>
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
                              <Link
                                className="operation-edit  d-flex justify-content-center align-items-center"
                                to={`${p.id}`}
                              >
                                <FaRegEdit className="fs-4" />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <Pagination
                  numOfPage={numOfPage}
                  page={page}
                  pageHandler={pageHandler}
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
