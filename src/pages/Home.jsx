import React from 'react'
import Chiefsection from "../components/Chiefsection";
import Hero from "../components/Hero";
import Quotesection from "../components/Quotesection";
import Skillsection from "../components/Skillsection";
const Home = () => {
  return (
    <div>
        <Hero/>
        <Skillsection/>
        <Quotesection/>
        <Chiefsection/>
    </div>
  )
}

export default Home;
