import { useParams } from "react-router";
import { useState, useEffect } from "react";
export default function ProductDescription() {
  const [product, setProduct] = useState({});
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=";
  const params = useParams();
  console.log("params", params);
  const fetchProduct = async (api) => {
    const response = await fetch(api);
    const { drinks } = await response.json();
    console.log(drinks);
    setProduct(drinks);
  };
  useEffect(() => {
    const correctUrl = `${url}/${params.id}`;
    fetchProduct(correctUrl);
  }, [params.id]);
  return (
    <div>
      <h2> Product Description </h2>
      <div>
        <h3>{product?.strDrink} </h3>
        <img alt={product?.strDrink} src={product?.strDrinkThumb} width={250} />
      </div>
    </div>
  );
}

//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=l"

//const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php"
