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
    <>
      <NavBar />
      <HeroSection />

      <div className="grid md:grid-cols-12 w-full ">
        {/* blogs section */}
        <div className="md:col-span-8 order-2 sm:order-1">
          <div className=" p-5 md:p-10">
            <BlogsSection
              tags={tags}
              category={category}
              searchTerm={searchTerm}
            />
          </div>
        </div>

        {/* sidebar stuffs */}
        <div className="md:col-span-4 order-1 sm:order-2">
          {/* serach bar */}
          <div className=" ml-10 ">
            <SearchBar />
          </div>

          {/* serach filters */}
          <div className=" m-10 mb-0 flex flex-col gap-5">
            <CategoriesCard />
            <TagsCard />
          </div>

          {/* latest post sidebar */}
          <div className="p-10 sm:block hidden ">
            <LatestPostSidebar />
          </div>
        </div>

        {/* latest post sidebar */}
        <div className="p-10 sm:hidden order-3 ">
          <LatestPostSidebar />
        </div>
      </div>

      <NewLattercard />
      <Footer />
    </>
  );
}

export default HomePage;
