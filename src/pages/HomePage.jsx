import React from "react";
import {
  NavBar,
  HeroSection,
  BlogsSection,
  SearchBar,
  CategoriesCard,
  LatestPostSidebar,
  TagsCard,
  NewLattercard,
  Footer,
} from "../components";

function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      {/* mobile screen search bar and tabs */}
      <div className="md:hidden ml-10 ">
        <SearchBar />
      </div>

      <div className="md:hidden m-10 mb-0 flex flex-col gap-5">
        <TagsCard />
        <CategoriesCard />
      </div>

      <div className="grid md:grid-cols-12">
        <div className="md:col-span-9 p-5 md:p-10">
          <BlogsSection />
        </div>

        {/* Desktop sidebar */}
        <div className="md:col-span-3  flex-col gap-20 hidden md:flex ">
          <SearchBar />
          <CategoriesCard />
          <LatestPostSidebar />
          <TagsCard />
        </div>
      </div>

      {/* mobile screen latest blog card */}
      <div className="p-10 md:hidden">
        <LatestPostSidebar />
      </div>

      <NewLattercard />
      <Footer />
    </>
  );
}

export default Home;
