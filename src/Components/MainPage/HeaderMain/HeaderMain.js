import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <section className="container-fluid mt-5 pb-5">
      <div className="text-center text-white">
        <h2>
          Ready to Grow? Get Your <br /> Free Proposal Today :
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br />{" "}
          typesetting industry. Lorem Ipsum has been the <br /> industry's
          standard dummy text ever since the 1500s, <br /> when an unknown
          printer
        </p>
        <div>
          <a href="">
            <button className="btn btn-brand text-uppercase mr-3">
              Send Me a Proposal
            </button>
          </a>
          <Link to="/portfolio">
            <button className="btn btn-brand text-uppercase">Portfolio</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
