import React from 'react';
import Header from '../components/Header';  // Import Header component

const Biography = () => (
  <div className="App">
    <Header />  {/* Add Header component at the top */}
    <div className="bio-container">
      <section className="biography">
        <h1>My Biography</h1>
        <p>
        Born in Colombia, I developed an early interest in technology and design, 
        which eventually led to a successful career in web development. After moving to the United States, 
        I earned a Bachelor of Science degree from Hunter College, where I honed technical and creative skills 
        that would lay the foundation for a career in web design. Throughout my work as a web designer, 
        I am known for combining an eye for detail with a strong technical understanding, crafting user-friendly 
        and visually appealing websites for clients across various industries.
        </p>
        <p>
        Currently, I am advancing my expertise by pursuing a Master’s in Software Development at Boston University. 
        This next step in my education is driven by a desire to deepen knowledge of software engineering, coding languages, 
        and cutting-edge development practices. With a solid foundation in design and user experience, I aim to bridge the gap 
        between front-end and back-end development, expanding my skill set to take on more complex and innovative projects in 
        the ever-evolving tech industry.
        </p>
      </section>
    </div>
  </div>
);

export default Biography;

