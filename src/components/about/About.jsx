import React from 'react';
// import './styles.css';
import './about.css';
import Member from '../team/Member';

const About = () => {
  return (
    <div className='body'>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="about-us">
          <h1>About Us</h1>
          <p>At About Us, we're a team of passionate individuals committed to innovation and excellence, <br />providing exceptional services and solutions that exceed our customers expectations. <br /> With diverse backgrounds and unique skills, we foster a culture of collaboration,<br /> creativity, and continuous</p>
          <div className='sponer-img'><img src="../../../public/img/team-four-person.webp" alt="Team Photo" /></div>
        </section>
        <section className="team-members">
          <h2 className="h2">Meet Our Team</h2>
          <Member/>
          {/* <div className="member">
            <img src="../../../public/img/digambar.JPG" alt="Member 1 Photo" />
            <h3>Digambar Singh</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="member">
            <img src="../../../public/img/m2.jpeg" alt="Member 2 Photo" />
            <h3>Isha Chaudhary</h3>
            <p>Co-Founder & CTO</p>
          </div>
          <div className="member">
            <img src="../../../public/img/m3.jpeg" alt="Member 3 Photo" />
            <h3>Jag Mohan </h3>
            <p>Co-Founder & CTO</p>
          </div>
          <div className="member">
            <img src="../../../public/img/m3.jpeg" alt="Member 4 Photo" />
            <h3>Sagar Sharma</h3>
            <p>Co-Founder & CTO</p>
          </div> */}
        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 About Us</p>
      </footer>
    </div>
  );
};

export default About;