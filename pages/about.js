import React from "react";
import Head from "next/head";

const About = () => (
  <div>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="hero">
      <h1 className="title">About page!</h1>
      <p className="description">Testing the Nextjs serverless pages</p>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);

export default About;
