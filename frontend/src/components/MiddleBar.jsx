import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import PostCard from "./PostCard";

import "../scss/MiddleBar.scss";

const MiddleBar = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState("");

  const [searchParams] = useSearchParams();

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

  // const paginate = () => {
  //   setPage(searchParams.get("page"));
  //   if (page === null) {
  //     setPage(1);
  //   }
  // };

  useEffect(() => {
    get_blogs();

    // setPage(searchParams.get("page"));
    if (searchParams.get("page")) {
      setPage(searchParams.get("page"));
    } else {
      setPage(1);
    }

    // paginate();
  }, [searchParams, setPage]);

  return (
    <div>
      {/* {blogs.map((blog) => (
        <PostCard blog={blog} key={blog.id} />
      ))} */}

      <Pagination className="justify-content-center my-pagi">
        {parseInt(page) != 1 > 0 ? (
          <LinkContainer to={`/?page=${1}`}>
            <Pagination.First />
          </LinkContainer>
        ) : null}

        {parseInt(page) - 1 > 0 ? (
          <LinkContainer to={`/?page=${parseInt(page) - 1}`}>
            <Pagination.Prev />
          </LinkContainer>
        ) : null}

        {parseInt(page) - 3 > 0 ? (
          <LinkContainer to={`/?page=${parseInt(page) - 3}`}>
            <Pagination.Item>{parseInt(page) - 3}</Pagination.Item>
          </LinkContainer>
        ) : null}
        {parseInt(page) - 2 > 0 ? (
          <LinkContainer to={`/?page=${parseInt(page) - 2}`}>
            <Pagination.Item>{parseInt(page) - 2}</Pagination.Item>
          </LinkContainer>
        ) : null}
        {parseInt(page) - 1 > 0 ? (
          <LinkContainer to={`/?page=${parseInt(page) - 1}`}>
            <Pagination.Item>{page - 1}</Pagination.Item>
          </LinkContainer>
        ) : null}

        <Pagination.Item active>{page}</Pagination.Item>

        <LinkContainer to={`/?page=${parseInt(page) + 1}`}>
          <Pagination.Item>{parseInt(page) + 1}</Pagination.Item>
        </LinkContainer>
        <LinkContainer to={`/?page=${parseInt(page) + 2}`}>
          <Pagination.Item>{parseInt(page) + 2}</Pagination.Item>
        </LinkContainer>
        <LinkContainer to={`/?page=${parseInt(page) + 3}`}>
          <Pagination.Item>{parseInt(page) + 3}</Pagination.Item>
        </LinkContainer>

        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default MiddleBar;
