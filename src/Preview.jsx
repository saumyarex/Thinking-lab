import React from "react";
import {
  BlogsSection,
  Card,
  CategoriesCard,
  Footer,
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
      <Footer />
    </div>
  );
}

export default Preview;
