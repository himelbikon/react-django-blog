import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import PostCard from "./PostCard";

import "../scss/MiddleBar.scss";
import CustomPaginattion from "./CustomPaginattion";

const MiddleBar = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState("");

  const [searchParams] = useSearchParams();

  const get_blogs = async (page_num) => {
    const url = `/api/blog/all/?page=${page_num}`;

    await axios
      .get(url)
      .then((response) => {
        setBlogs(response.data);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };

  useEffect(() => {
    if (searchParams.get("page")) {
      setPage(searchParams.get("page"));
    } else {
      setPage(1);
    }

    get_blogs(page);
  }, [searchParams, setPage, page]);

  return (
    <div>
      {blogs.map((blog) => (
        <PostCard blog={blog} key={blog.id} />
      ))}

      <CustomPaginattion page={page} />
    </div>
  );
};

export default MiddleBar;
