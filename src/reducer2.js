import { SET_MIN_MAX_RANGE, TOGGLE_PLACE_TYPE } from "./actions";

const reducer2 = (state, action) => {
  const { type, payload } = action;

  if (type === TOGGLE_PLACE_TYPE) {
    return { ...state, placeType: payload.placeType };
  } else if (type === SET_MIN_MAX_RANGE) {
    if (payload.type === "min")
      return {
        ...state,
        priceRange: { ...state.priceRange, min: payload.val },
      };
    else
      return {
        ...state,
        priceRange: { ...state.priceRange, max: payload.val },
      };
  }

  throw Error("Error");
};

export default reducer2;
