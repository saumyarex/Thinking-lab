import React from "react";
import { SidebarPostsCard } from "./index.js";

function LatestPostSidebar() {
  return (
    <div>
      <h1 className="font-bold ">LATEST POSTS</h1>
      <div>
        <SidebarPostsCard
          title={"5 Essential Tips for Designing a Memorable Brand Logo"}
          date={"December 15, 2022"}
          author={"Jhon Smith"}
          imageSrc={
            "https://media.licdn.com/dms/image/v2/D5612AQHfLCnWgAmXsQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1700667943141?e=2147483647&v=beta&t=2xJpCOuhFi2j8tLXa9A1MKDXLaYcWiSOl433HrIChGY"
          }
        />
        <SidebarPostsCard
          title={"5 Essential Tips for Designing a Memorable Brand Logo"}
          date={"December 15, 2022"}
          author={"Jhon Smith"}
          imageSrc={
            "https://media.licdn.com/dms/image/v2/D5612AQHfLCnWgAmXsQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1700667943141?e=2147483647&v=beta&t=2xJpCOuhFi2j8tLXa9A1MKDXLaYcWiSOl433HrIChGY"
          }
        />
        <SidebarPostsCard
          title={"5 Essential Tips for Designing a Memorable Brand Logo"}
          date={"December 15, 2022"}
          author={"Jhon Smith"}
          imageSrc={
            "https://media.licdn.com/dms/image/v2/D5612AQHfLCnWgAmXsQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1700667943141?e=2147483647&v=beta&t=2xJpCOuhFi2j8tLXa9A1MKDXLaYcWiSOl433HrIChGY"
          }
        />
      </div>
    </div>
  );
}

export default LatestPostSidebar;
