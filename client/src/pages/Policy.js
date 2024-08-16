import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>Privecy Policy</h1>
          <p>We understand that you care about how your information is used and shared, and we appreciate your trust that we will handle it carefully and responsibly. This Privacy Notice explains how EngiClock and its affiliates collect and process your personal information through our website, products, services, and applications that reference this Privacy Notice (collectively "EngiClock Services").</p>
          <p>By using EngiClock Services, you agree to our use of your personal information (including sensitive personal information) in accordance with this Privacy Notice, which may be updated from time to time at our discretion. You also consent to us collecting, storing, processing, transferring, and sharing your personal information (including sensitive personal information) with third parties or service providers for the purposes outlined in this Privacy Notice.</p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
