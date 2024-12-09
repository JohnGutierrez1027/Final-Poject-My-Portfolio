import React from 'react';
import Header from '../components/Header';

const Home = () => (
  <div className="App">
    <Header />
    <div className="App-content"> {/* Wrapping content inside a div with a class name for styling */}
      <h1>Welcome to My Portfolio!!!</h1>
      <p>
        Welcome to my Portfolio, where you’ll find an overview of my academic journey, the skills I’ve developed,
        and the projects that fuel my passion for technology. This site highlights the projects that drive me, from responsive websites to software solutions, each reflecting my passion for
        innovation and problem-solving. I believe in continuous learning, and my values—such as collaboration, attention to detail, and
        a commitment to quality—guide every project I take on. Here, you’ll get a sense of not just what I do, but why I do it: to create
        meaningful, impactful work that pushes the boundaries of what’s possible in web and software development.
      </p>
    </div>
  </div>
);

export default Home;
