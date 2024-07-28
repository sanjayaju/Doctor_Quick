import React from 'react';
import heroimg1 from '../assets/images/hero-img01.png';
import heroimg2 from '../assets/images/hero-img02.png';
import heroimg3 from '../assets/images/hero-img03.png';
import icon1 from '../assets/images/icon01.png';
import icon2 from '../assets/images/icon02.png';
import icon3 from '../assets/images/icon03.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';

const Home = () => {
  return (
    <>
      {/* {herosection start} */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]'>
                  We help patients live a healthy and longer life
                </h1>
                <p className='text__para'>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </p>
                <button className='btn'>Request an appointment</button>
              </div>

              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div className='mb-[30px] lg:mb-0'>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellow-400 rounded-full block mt-[14px]'></span>
                  <p className='text__para'>Years of experience</p>
                </div>

                <div className='mb-[30px] lg:mb-0'>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                  <span className='w-[100px] h-2 bg-purple-900 rounded-full block mt-[14px]'></span>
                  <p className='text__para'>Clinics</p>
                </div>

                <div className='mb-[30px] lg:mb-0'>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-blue-600 rounded-full block mt-[14px]'></span>
                  <p className='text__para'>Patient satisfaction</p>
                </div>
              </div>
            </div>

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-[600px]' src={heroimg1} alt=''/>
              </div>
              <div className='mt-[30px]'>
                <img src={heroimg2} alt='' className='w-[400px] mb-[30px]'/>
                <img src={heroimg3} alt='' className='w-[300px]'/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {herosection end} */}

      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing the best medical services</h2>
            <p className='text__para text-center'>
              Best care for everyone, All are one, Our health system offers unmatched expert health care
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon1} alt=''/>
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Best care for everyone, All are one, Our health system offers unmatched expert health care
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover: text-white w-6 h-5 '/>
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon2} alt=''/>
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Best care for everyone, All are one, Our health system offers unmatched expert health care
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover: text-white w-6 h-5 '/>
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon3} alt=''/>
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Best care for everyone, All are one, Our health system offers unmatched expert health care
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover: text-white w-6 h-5 '/>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </section>

<About/>

{/*{service section}*/}
<section>
  <div className="container">
    <div className="xl:w-[470px] mx-auto ">
    <h2 className='heading text-center'>Our Medical Services</h2>
    <p className='text__para text-center'>With Our Hearts The Best Care For Everyone</p>
    </div>
    <ServiceList/>
  </div>
</section>
{/*{service section end}*/}

    </>
  );
}

export default Home;
