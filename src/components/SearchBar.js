import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [keyword, SetKeyword] = useState("");
  const navigate = useNavigate();
  function Submithandle(e) {
    e.preventDefault();
    navigate(`/search?q=${keyword}`);
  }
  return (
    <form onSubmit={Submithandle}>
      <input
        type="search"
        className="form-control"
        placeholder="search..."
        onChange={(e) => SetKeyword(e.target.value)}
      />
    </form>
  );
}
