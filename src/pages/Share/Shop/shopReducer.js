export default function shopReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "setFilter":
      return {
        ...state,
        page: payload.page,
        limit: payload.limit,
        q: payload.q,
        category: payload.category,
        order: payload.order,
        sort: payload.sort,
        delay: payload.delay,
      };
    case "setDelay":
      return { ...state, delay: payload };
    case "setProducts":
      return { ...state, products: payload };
    case "setTotalProducts":
      return { ...state, totalProducts: payload };
    case "setPage":
      return { ...state, page: payload };

    
  }
}
