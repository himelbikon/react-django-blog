import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Title from "./Title";

const Addvertise = ({ title, image, link }) => {
  return (
    <div>
      <Title title={title} />

      {link ? (
        <Link to={link}>
          <div>
            <Image src={image} alt={image} className="w-100" fluid />
          </div>
        </Link>
      ) : (
        <div>
          <Image src={image} alt={image} className="w-100" fluid />
        </div>
      )}
    </div>
  );
};

export default Addvertise;
