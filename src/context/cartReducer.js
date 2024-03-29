export function cartReducer(state, action) {
  const { type, payload } = action;
  let items;
  switch (type) {
    case "setItems":
      localStorage.shopping = JSON.stringify(payload);
      return { ...state, items: payload };
    case "incrementItem":
      const findItem = state.items.find((item) => item.id == payload.id);
      if (findItem) {
        items = state.items.map((p) => {
          if (p.id == payload.id) {
            return { ...p, count: p.count + 1 };
          } else {
            return p;
          }
        });
      } else {
        items = [...state.items, { ...payload, count: 1 }];
      }
      state.saveToLocalStorage(items);
      return { ...state, items };

    case "decrementItem":
      const item = state.items.find((p) => p.id === payload.id);

      if (item.count > 1) {
        items = state.items.map((p) => {
          if (p.id == payload.id) {
            return { ...p, count: p.count - 1 };
          } else {
            return p;
          }
        });
      } else {
        items = state.items.filter((p) => p.id != payload.id);
      }

      state.saveToLocalStorage(items);
      return { ...state, items };
    case "deleteItem":
      items = state.items.filter((p) => p.id != payload.id);
      state.saveToLocalStorage(items);
      return { ...state, items };
  }
}
