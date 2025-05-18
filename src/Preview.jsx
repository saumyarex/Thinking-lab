import React from "react";
import {
  BlogsSection,
  Card,
  CategoriesCard,
  Footer,
  HeroSection,
  NavBar,
  LatestPostSidebar,
  NewLattercard,
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
      <LatestPostSidebar />
      <NewLattercard />
      <Footer />
    </div>
  );
}

export default Preview;
