export function cartReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "addToCart":
      localStorage.shopping = JSON.stringify([...state.items, payload]);
      return { ...state, items: [...state.items, payload] };
    case "setItems":
      localStorage.shopping = JSON.stringify(payload);
      return { ...state, items: payload };
    case "updateShoppingProducts":
      return { ...state, items: payload };
  }
}
