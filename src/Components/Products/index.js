import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Products() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=l";
  const [prod, setProd] = useState([]);
  const fetchDrinks = async (api) => {
    const response = await fetch(api);
    const { drinks } = await response.json();
    console.log(drinks);
    setProd(drinks);
  };
  useEffect(() => {
    fetchDrinks(url);
  }, []);
  return (
    <div className="drink-container">
      {prod.map((item) => {
        const { idDrink, strDrinkThumb } = item;
        return (
          <div key={idDrink} className="drinks">
            <Link to={`/products/${idDrink}`}>
              <img alt="title" src={strDrinkThumb} width={200} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=l"
