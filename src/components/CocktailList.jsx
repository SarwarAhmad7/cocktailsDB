import React from "react";
import { UseGlobalContext } from "../Context";
import Loading from "../components/Loading";
import Cocktail from "./Cocktail";
import "./cocktail.css";

const CocktailList = () => {
  const { loading, cocktails } = UseGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <div className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
