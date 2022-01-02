import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import PostCard from "./PostCard";

const MiddleBar = () => {
  let blogs = [];

  const get_blogs = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/blog/all/")
      .then((response) => {
        blogs = response.data;
      })
      .catch((error) => {
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
      <PostCard />

      <Pagination className="justify-content-center">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis disabled />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>

        <Pagination.Ellipsis disabled />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default MiddleBar;
