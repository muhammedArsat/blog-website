import React from "react";
import BlogImg from "../../../assets/blog-cover.webp";
const BlogCard = () => {
  const description =
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, quo quos. Quaerat aperiam aliquam perferendis laudantium. Ipsum expedita sequi rem in omnis ab molestiae ex obcaecati dicta nulla autem reiciendis excepturi amet, dolores iure doloremque, dolorum facere voluptates. Quo, iusto. Magnam odit maxime odio impedit illo ipsum molestiae assumenda possimus similique sint itaque, excepturi, suscipit rerum? Beatae eius corrupti dignissimos, vitae repellat quasi blanditiis, repellendus quae quas nisi neque, asperiores animi odio non rerum ipsum natus ea tenetur id pariatur ad expedita. Iusto obcaecati ad hic. Doloribus alias qui eius quis laborum perspiciatis? Omnis ut voluptatibus illo recusandae, blanditiis nam.";

  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };
  return (
    <div className="relative z-10 max-w-[470px]flex flex-col gap-2 cursor-pointer">
      <div className="flex items-center gap-3 relative font-body font-medium top-9 p-2">
        <h1 className="bg-white text-black rounded-md shadow-sm px-2 ">
          Technology
        </h1>
        <h1 className="bg-white text-black rounded-md shadow-sm px-2 ">Web</h1>
      </div>
      <img
        src={BlogImg}
        alt="blog image"
        className="w-[375px]  object-contain rounded-lg"
      />
      <p className="font-body text-sm text-light-secondary dark:text-dark-secondary">
        <span className="text-purple-500 ">Lorem Epsum</span> on October 16,
        2024{" "}
      </p>
      <h1 className="font-body font-semibold text-xl max-w-[420px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h1>
      <p className="font-body text-lg text-light-secondary dark:text-dark-secondary max-w-[420px]">
        {truncateText(description, 25)}
      </p>
    </div>
  );
};

export default BlogCard;
