import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to EngiClock, your one-stop destination for unique and high-quality clocks designed to enhance any space. At EngiClock, we believe that a clock is more than just a timepiece—it's an expression of style, a blend of functionality and aesthetics. Our carefully curated selection includes a variety of clocks ranging from modern minimalist designs to classic vintage pieces, catering to diverse tastes and preferences. Whether you're looking to add a statement piece to your living room, a sleek design to your office, or a charming touch to your bedroom, EngiClock has the perfect clock for you. We are committed to providing an exceptional shopping experience, with customer satisfaction at the heart of everything we do. Explore our collection and find the perfect timepiece that resonates with your unique style.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
