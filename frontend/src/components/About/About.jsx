import React from 'react';
import aboutimg from "../../assets/images/about.png";
import aboutcard from "../../assets/images/about-card.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* {about img} */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutimg} alt='' />
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-75] lg:right-[22%]'>
              <img src={aboutcard} alt='' />
            </div>
          </div>

          {/* {about content} */}
          <div className="w-full lg:w-1/2 xl:w-[650px] order-1 lg:order-2">
            <h2 className='heading'>Proud to be the nation's one of the best</h2>
            <p className='text__para'>
              For the past 30 years, we have been recognized as India's best public hospital. Our unwavering commitment to providing top-notch medical care and our dedication to the well-being of our patients have earned us this esteemed reputation. We take pride in our state-of-the-art facilities, expert healthcare professionals, and compassionate approach, ensuring every patient receives the highest standard of care.
            </p>
            <p className='text__para mt-[30px]'>
              Every day, we strive for excellence, caring for our patients with unwavering dedication. We never look back, always pushing forward to ensure that our best is what we offer to each and every individual who walks through our doors. For the past 30 years, this relentless pursuit of quality has made us India's best public hospital.
            </p>
            <Link to="/">
              <button className='btn'>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
