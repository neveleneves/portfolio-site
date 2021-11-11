import { GET_PORTFOLIO, LOADER_HIDE, LOADER_SHOW } from "../type/portfolioTypes";

export function getPortfolioList(projects) {
  return {
    type: GET_PORTFOLIO,
    payload: projects,
  };
}

export function activeLoader(toggle) {
  return {
    type: LOADER_SHOW,
    payload: toggle,
  };
}

export function disableLoader(toggle) {
  return {
    type: LOADER_HIDE,
    payload: toggle,
  };
}