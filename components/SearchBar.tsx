"use client";

import React, { FormEventHandler, useState } from "react";
import { SearchManufacturer } from "./";

type Props = {};

const SearchBar = (props: Props) => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;