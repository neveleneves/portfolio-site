import {
  GET_PORTFOLIO,
  LOADER_HIDE,
  LOADER_SHOW,
} from "../type/portfolioTypes";

const initState = {
  portfolioList: [],
  loadingPorfolio: false,
};

export const portfolioReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PORTFOLIO:
      return { ...state, portfolioList: action.payload };
    case LOADER_SHOW:
      return { ...state, loadingPorfolio: true };
    case LOADER_HIDE:
      return { ...state, loadingPorfolio: false };
    default:
      return state;
  }
};
