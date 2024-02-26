export default function shopReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "setProducts":
      return { ...state, products: payload };
    case "setTotalProducts":
      return { ...state, totalProducts: payload };
    case "setPage":
      return { ...state, page: payload };
    case "setIsLoading":
      return { ...state, isLoading: payload };
    case "setLoadingError":
      return {
        ...state,
        loadingErrod: { code: payload.code, message: payload.message },
      };
    case "setfilterCategory":
      return { ...state, filterCategory: payload, page: 1 };
    case "setLimit":
      return { ...state, limit: payload, page: 1 };
    case "setSortAndOrder":
      return { ...state, sort: payload.sort, order: payload.order };
    case "setSearch":
      return { ...state, q: payload, page: 1 };
  }
}
