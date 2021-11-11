import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolioList } from "../redux/action/portfolioActions";

export const useGetProjects = () => {
  const dispatch = useDispatch();
  const { portfolioList, loadingPortfolio } = useSelector(
    (state) => state.portfolio
  );

  useEffect(() => {
    dispatch(getPortfolioList());
  }, [dispatch]);

  return { portfolioList, loadingPortfolio };
};
