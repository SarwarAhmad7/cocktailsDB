import React, { useEffect, useRef } from "react";
import { UseGlobalContext } from "../Context";
import "./cocktail.css";

const SearchForm = () => {
  const { setSearchTerm } = UseGlobalContext();
  const searchValue = useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section>
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
