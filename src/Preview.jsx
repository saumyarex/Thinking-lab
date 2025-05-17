import React from "react";
import {
  BlogsSection,
  Card,
  CategoriesCard,
  HeroSection,
  NavBar,
  SearchBar,
  TagsCard,
} from "./components";

function Preview() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SearchBar />
      <CategoriesCard />
      <TagsCard />
    </div>
  );
}

export default Preview;
