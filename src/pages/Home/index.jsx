import React, { useState } from 'react';
import classes from './style.module.scss';
import Section1 from './Section1/Section1.jsx';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';

const Home = () => {
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);

  return (
    <div>
      <Section1 isVisible={section1Visible} updateVisibility={setSection1Visible} />
      <Section2 isVisible={section2Visible} updateVisibility={setSection2Visible} />
      <Section3 isVisible={section3Visible} updateVisibility={setSection3Visible} />
    </div>
  );
};

export default Home;
