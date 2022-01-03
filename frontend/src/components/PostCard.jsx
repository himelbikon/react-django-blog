import React from "react";
import { Image } from "react-bootstrap";

const PostCard = ({ blog }) => {
  return (
    <div>
      <div className="post border mb-3">
        <div>
          <Image
            src="https://via.placeholder.com/500x300"
            alt=""
            fluid
            className="w-100"
          />
        </div>
        <div class="p-3">
          <h5>{blog.title}</h5>

          <div className="my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            debitis rem earum cupiditate voluptatum autem asperiores ducimus
            pariatur explicabo sapiente accusamus in consequuntur, ipsam, fuga
            incidunt? Corrupti eos culpa veritatis suscipit doloribus quidem cum
            tenetur officia? Error dicta non quas.
          </div>

          <div className="d-flex justify-content-between">
            <div>Himel</div>
            <div>posted</div>
            <div>category</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
