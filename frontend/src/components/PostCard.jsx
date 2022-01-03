import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const PostCard = ({ blog }) => {
  return (
    <div>
      <div className="post border mb-3">
        <div>
          <Link to={`/post/${blog.id}`}>
            {blog.image ? (
              <Image
                src={blog.image}
                alt={blog.image}
                fluid
                className="w-100"
              />
            ) : (
              <Image
                src="https://via.placeholder.com/500x300"
                alt=""
                fluid
                className="w-100"
              />
            )}
          </Link>
        </div>
        <div class="p-3">
          <Link to={`/post/${blog.id}`} style={{ textDecoration: "none" }}>
            <h5>{blog.title}</h5>
          </Link>

          <div className="my-3">{blog.details.slice(0, 400)}...</div>

          <div className="d-flex justify-content-between">
            <div>{blog.posted_by}</div>
            <div>{blog.ago}</div>
            <div>{blog.category_name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
