import { useSelector } from "react-redux";
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

function HomePage() {
  const { tags, category, searchTerm } = useSelector((state) => state.posts);
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <div className=" grid md:grid-cols-12 ">
        <div className="mx-5 space-y-5 order-1 md:order-2 md:col-span-4 lg:col-span-3 ">
          <SearchBar />
          <CategoriesCard />
          <TagsCard />
          <LatestPostSidebar className="md:block hidden mt-5 " />
        </div>
        <div className=" order-2 md:order-1 md:col-span-8 lg:col-span-9 ">
          <BlogsSection
            tags={tags}
            category={category}
            searchTerm={searchTerm}
          />
        </div>
      </div>

      <LatestPostSidebar className="md:hidden mt-5 px-5" />
      <NewLattercard />
      <Footer />
    </div>
  );
}

export default HomePage;
