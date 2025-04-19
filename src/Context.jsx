import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const GlobalContext = createContext();

export const UseGlobalContext = () => useContext(GlobalContext);

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <GlobalContext.Provider
      value={{ loading, searchTerm, cocktails, setSearchTerm }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
