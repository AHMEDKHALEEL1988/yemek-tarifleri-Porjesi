import React, { useContext } from "react";
import "./Search.css";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../../components/ProductCard";
import { ThemeContext } from "../../contexts/ThemeContext";

function Search() {
  const [searchParams] = useSearchParams();
  const { mode } = useContext(ThemeContext);
  // Capitalizing
  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  function capitalizeWords(str) {
    str = str.trim();
    return str
      .split(" ")
      .map((word) => capitalize(word))
      .join(" ");
  }

  //

  const query = searchParams.get("q");
  const url = "http://localhost:3000/tarifler?baslik=" + capitalizeWords(query);
  const { data: tarifler, isLoading, error } = useFetch(url);

  return (
    <div className="row mt-3">
      {query && (
        <>
          <h2 style={{ color: mode === "dark" ? "white" : "black" }}>
            Aranan Kelime "{capitalizeWords(query)}"
          </h2>
          <hr />
        </>
      )}
      {isLoading && <div className="alert alert-warning">Yükleniyor...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {tarifler &&
        tarifler.map((tarif) => <ProductCard key={tarif.id} tarif={tarif} />)}
    </div>
  );
}

export default Search;
