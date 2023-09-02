import React, { useState, useEffect, useRef } from 'react';
import classes from './style.module.scss';
import anime from 'animejs';

const Section1 = ({ isVisible, updateVisibility }) => {
  const sectionRef = useRef(null);
  const helloRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update the visibility state in the Home component
            updateVisibility(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [updateVisibility]);

  return (
    <div className={classes.Section1Wrapper} ref={sectionRef}>
      <div className={classes.Background}>
        <div className={classes.LeftWrapper}>
          <div className={classes.Title}>
            <div className={classes.Title1}>Herklots Harold</div>
            <div className={classes.Title2}>PORTFOLIO</div>
          </div>
          <div className={classes.Logo}></div>
        </div>
        <div className={classes.RightWrapper}></div>
      </div>
    </div>
  );
};

export default Section1;
