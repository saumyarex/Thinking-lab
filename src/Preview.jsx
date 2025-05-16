import React from "react";
import {
  BlogsSection,
  Card,
  CategoriesCard,
  HeroSection,
  NavBar,
  SearchBar,
} from "./components";

function Preview() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SearchBar />
      <CategoriesCard />
    </div>
  );
}

export default Preview;
