import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About My Site</h2>
            <p className='fs-17'>In my site, they’re 30% – 60% more expensive than local books. So if you want to save money, I recommend buying digital books from our site (instead of physical books from your local bookstore.</p>
            <p className='fs-17'>The prices of physical books range from $5 to $25. (It’s rare to find them cheaper than that because of printing and distribution costs. However, if you examine the prices of digital books on our site, they usually range from $0 to $15. In fact, there are plenty of great books that are free or dirt cheap!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
