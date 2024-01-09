import { styled } from "styled-components";
import img from "../f.jpg";
import img1 from "../insta.png";
import img2 from "../kTMKop6zc.png";
import img3 from "../cart.png";

import { Link } from "react-router-dom";

const H1 = styled.h1`
  color: white;
  padding-left: 30px;
`;

const HED = styled.header`
  background-color: rgb(56, 56, 59);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const UL = styled.ul`
  list-style: none;
  color: white;
  display: flex;
  gap: 20px;
  padding-left: 30px;
  font-size: 18px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const DIV = styled.div`
  align-items: center;
  display: flex;
  gap: 15px;
  padding-right: 30px;

  @media (max-width: 768px) {
    margin-top: 15px;
    padding-right: 15px;
  }
`;

const IMG = styled.img`
  width: 20px;
`;

const Header = () => {
  return (
    <HED>
      <Link to={"/"}>
        <H1>Crosby</H1>
      </Link>
      <UL>
        <li>
          <Link to="/shop" style={{ textDecoration: "none", color: "white" }}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Our Story
          </Link>
        </li>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Journal
          </Link>
        </li>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Contact
          </Link>
        </li>
      </UL>
      <DIV>
        <IMG src={img}></IMG>
        <IMG src={img1}></IMG>
        <IMG src={img2}></IMG>
        <Link to="/cart">
          <IMG style={{ width: "40px" }} src={img3}></IMG>{" "}
        </Link>
        <p style={{ color: "white", fontSize: "19px" }}>0</p>
      </DIV>
    </HED>
  );
};

export default Header;
