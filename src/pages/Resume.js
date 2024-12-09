import React from "react";
import Header from '../components/Header';

const Resume = () => (
  <div className="container-resume">
    <Header />
    <section className="resume">
      <h1>My Resume</h1>
      <iframe
        src="/documents/resume.pdf"
        title="Resume PDF"
        width="100%"
        height="300px"
        style={{ border: "none" }}
      ></iframe>
      <div className="download-link">
        <a
          href="/documents/resume.pdf"
          download="My_Resume.pdf"
          className="btn"
        >
          Download PDF
        </a>
      </div>
    </section>
  </div>
);

export default Resume;
