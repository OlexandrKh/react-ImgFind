import React from "react";
import Searchbar from "../Searchbar/Searchbar";

export default function SearchForm({ onSubmit }) {
  return <Searchbar onSubmit={onSubmit} />;
}
