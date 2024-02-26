export function cartReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "setItem":
      return { ...state, item: [...state.item, payload] };
  }
}
