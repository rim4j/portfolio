import Image from "next/image";
import Link from "next/link";
import React from "react";
import linkedin from "./../../public/linkedinIcon.png";
import github from "./../../public/githubIcon.png";

const Contact = () => {
  return (
    <div
      id='contact'
      className='container mx-auto px-6 md:px-12 lg:px-24 py-24'
    >
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Lets Contact
          </h2>
          <p className='text-[#adb7be] text-lg mb-6 leading-relaxed'>
            I'm always excited to connect, share ideas, and collaborate on
            innovative projects. Let's work together to create something
            impactful and inspiring!
          </p>
          <div className='flex gap-4'>
            <Link href='https://www.linkedin.com/in/amir-jalali-a37892206/'>
              <Image
                src={linkedin}
                alt='linkedin icon'
                width={40}
                height={40}
                className='hover:scale-110 transition-transform duration-300 cursor-pointer'
              />
            </Link>
            <Link href='https://github.com/rim4j'>
              <Image
                src={github}
                alt='github icon'
                width={40}
                height={40}
                className='hover:scale-110 transition-transform duration-300 cursor-pointer'
              />
            </Link>
          </div>
        </div>
        <div className='bg-[#1a1a1a] p-8 rounded-xl shadow-lg'>
          <form className='flex flex-col space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-white font-medium mb-2 '
              >
                Your Email
              </label>
              <input
                id='email'
                type='email'
                required
                placeholder='youremail@gmail.com'
                autoComplete='off'
                className='w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] text-white placeholder-[#9ca2a9] focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-300'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-white font-medium mb-2 '
              >
                Subject
              </label>
              <input
                id='subject'
                type='text'
                required
                placeholder='Subject'
                autoComplete='off'
                className='w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] text-white placeholder-[#9ca2a9] focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-300'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-white font-medium mb-2 '
              >
                Message
              </label>
              <textarea
                id='message'
                type='text'
                required
                placeholder='lets talk about ...'
                autoComplete='off'
                className='w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] text-white placeholder-[#9ca2a9] focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-300 h-32 resize-none '
              />
            </div>
            <button
              type='submit'
              className='w-full bg-[#00adb5] hover:bg-[#008188] cursor-pointer text-white font-medium py-3 rounded-lg transition-all duration-300  '
            >
              {" "}
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
