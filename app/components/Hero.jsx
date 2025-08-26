"use client";
import Image from "next/image";
import profile from "../../public/hero.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className='w-11/12 max-w-3xl text-center mx-auto mt-32 flex flex-col items-center justify-center gap-4
     '
    >
      <div className='rounded-full bg-[#1f1f1f] w-[200px] h-[200px] relative'>
        <Image
          src={profile}
          alt='profile image'
          className='rounded-full w-48 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        />
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
        Hi Im Amirhossein
      </h3>
      <div className='text-3xl sm:text-6xl lg:text-[66px] font-bold'>
        <TypeAnimation
          sequence={[1000, "Front End Developer", 1000, "Mobile Developer"]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
        />
      </div>
      <p>
        Frontend & Mobile Developer with 4 years of experience in React,
        Next.js, React Native and Flutter building responsive and user-friendly
        applications.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a
          href=''
          className='px-10 py-3 rounded-full border border-white bg-[#1f1f1f] text-white flex items-center gap-2'
        >
          Contact Me
        </a>
        <a
          href=''
          className='px-10 py-3 rounded-full border border-gray-500   flex items-center gap-2'
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
