import React from "react";
import { setCategory } from "../store/postsSlice";
import { useDispatch } from "react-redux";
function CategoriesCard() {
  const disptach = useDispatch();

  const [categoryActive, setCategoryActive] = React.useState(null);

  const allCategories = React.useMemo(
    () => [
      "Design and Branding",
      "Website Development",
      "App Development",
      "Social Media",
      "Marketing Strategy",
      "Video Production",
    ],
    []
  );

  const handlClick = React.useCallback(
    (index) => {
      if (categoryActive === index) {
        setCategoryActive(null);
      } else {
        setCategoryActive(index);
      }
    },
    [categoryActive]
  );

  React.useEffect(() => {
    const updateCategory = () => {
      disptach(setCategory(allCategories[categoryActive]));
    };

    updateCategory();
  }, [categoryActive, disptach, allCategories]);

  return (
    <div className="">
      <div
        className="mb-3 font-bold hover:cursor-pointer"
        onClick={() => setCategoryActive(null)}
      >
        ALL CATEGORIES
      </div>
      <ul className="flex flex-col gap-2 ">
        {allCategories.map((category, index) => (
          <li
            key={category}
            value={category}
            className={`hover:cursor-pointer hover:font-medium ${
              categoryActive === index
                ? "text-amber-700 font-medium ml-4"
                : null
            }`}
            onClick={() => handlClick(index)}
          >
            {categoryActive === index && (
              <svg
                width="15"
                height="7"
                viewBox="0 0 157 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline mr-1"
              >
                <path
                  d="M156.744 33.3606L0.449278 68.6736L0.0207267 0.00106248L156.744 33.3606Z"
                  fill="#A84735"
                />
              </svg>
            )}
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesCard;
