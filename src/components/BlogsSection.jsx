import React from "react";
import { Card } from "./index";

function BlogsSection() {
  return (
    <div className="grid sm:grid-cols-2 ">
      <Card
        title={"5 Essential Tips for Designing a Memorable Brand Logo"}
        date={"December 15, 2022"}
        author={"Jhon Smith"}
        imageSrc={
          "https://media.licdn.com/dms/image/v2/D5612AQHfLCnWgAmXsQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1700667943141?e=2147483647&v=beta&t=2xJpCOuhFi2j8tLXa9A1MKDXLaYcWiSOl433HrIChGY"
        }
      />
      <Card
        title={"5 Essential Tips for Designing a Memorable Brand Logo"}
        date={"December 15, 2022"}
        author={"Jhon Smith"}
        imageSrc={
          "https://media.licdn.com/dms/image/v2/D5612AQHfLCnWgAmXsQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1700667943141?e=2147483647&v=beta&t=2xJpCOuhFi2j8tLXa9A1MKDXLaYcWiSOl433HrIChGY"
        }
      />
      <Card
        title={"5 Essential Tips for Designing a Memorable Brand Logo"}
        date={"December 15, 2022"}
        author={"Jhon Smith"}
        imageSrc={
          "https://media.licdn.com/dms/image/v2/D5612AQHfLCnWgAmXsQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1700667943141?e=2147483647&v=beta&t=2xJpCOuhFi2j8tLXa9A1MKDXLaYcWiSOl433HrIChGY"
        }
      />
    </div>
  );
}

export default BlogsSection;
