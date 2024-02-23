export default function shopReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "setProducts":
      return { ...state, products: payload };
    case "setTotalProducts":
      return { ...state, totalProducts: payload };
  }
}
