import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import PostCard from "./PostCard";

const MiddleBar = () => {
  const [blogs, setBlogs] = useState([]);

  const get_blogs = async () => {
    await axios
      .get("/api/blog/all/")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          for (let property in error.response.data) {
            console.log(
              JSON.stringify(`${property}: ${error.response.data[property]}`)
            );
          }
        }
      });
  };

  useEffect(() => {
    get_blogs();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <PostCard blog={blog} key={blog.id} />
      ))}

      <Pagination className="justify-content-center">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>

        <Pagination.Item active>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>

        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default MiddleBar;
