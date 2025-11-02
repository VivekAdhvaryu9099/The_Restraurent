import React from "react";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            quo atque culpa animi aut amet corrupti, debitis assumenda minima
            quas odit aspernatur dolore inventore dolor commodi aliquam harum
            quos. Officiis ipsa ab hic error accusamus sint voluptatibus illo,
            inventore dolores eligendi quos culpa eaque nobis eveniet, iusto
            aspernatur aliquid asperiores?
          </p>
          <Link to={"/"}>Explore Menu {" "}
          <span>
            <HiOutlineArrowNarrowRight/>
          </span>
          </Link>
        </div>

                <div className="banner">
                    <img src='/about.png' alt="about" />
                </div>

      </div>
    </section>
  );
};

export default About;
