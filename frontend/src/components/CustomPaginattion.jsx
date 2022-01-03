import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CustomPaginattion = ({ page }) => {
  const [total_blogs, setTotalBlogs] = useState("");

  useEffect(() => {
    setTotalBlogs(555);
  }, [setTotalBlogs]);

  return (
    <div>
      <Pagination className="justify-content-center my-pagi">
        {parseInt(page) > 2 ? (
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

        <LinkContainer to={`/?page=${parseInt(page) + 1}`}>
          <Pagination.Next />
        </LinkContainer>

        <LinkContainer to={`/?page=${total_blogs}`}>
          <Pagination.Last />
        </LinkContainer>
      </Pagination>
    </div>
  );
};

export default CustomPaginattion;
