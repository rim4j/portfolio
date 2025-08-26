import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col'>
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
