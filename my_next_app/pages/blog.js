import React from "react";
import codaing from "../image/coading.jpg";
import Image from "next/image";

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <Image src={codaing} alt="" width={700} height={400} />
    </div>
  );
};

export default Blog;
