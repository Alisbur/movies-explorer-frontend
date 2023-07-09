import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Tech from '../Tech/Tech';
import Student from '../Student/Student';

function Landing(props) {
  return (
    <>
      <Hero />
      <About />
      <Tech />
      <Student />
    </>
  );
}

export default Landing;