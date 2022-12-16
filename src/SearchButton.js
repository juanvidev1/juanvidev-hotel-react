import React, { useState } from "react";
const SearchButton = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };
  console.log(searchInput);
  return (
    <div className="search-row">
      <input
        type="text"
        id="customerName"
        className="form-control"
        placeholder="Customer name"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <button className="btn btn-primary">Search</button>
    </div>
  );
};

export default SearchButton;
