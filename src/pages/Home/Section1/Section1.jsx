import React, { useState, useEffect, useRef } from 'react';
import classes from './style.module.scss';
import anime from 'animejs';

const Section1 = ({ isVisible, updateVisibility }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const helloRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            updateVisibility(true);
            setHasAnimated(true);

            anime({
              targets: '.ease-in',
              translateX: [0, 0],
              opacity: [0, 1],
              duration: 2000,
              easing: 'easeInOutSine',
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <div className={classes.Section1Wrapper} ref={sectionRef}>
      <div className={classes.Background}>
        <div className={classes.LeftWrapper}>
          <div className={`ease-in ${classes.Title}`} ref={helloRef}>
            <div className={classes.Title1}>Herklots Harold</div>
            <div className={classes.Title2}>PORTFOLIO</div>
          </div>
          <div className={`ease-in ${classes.Logo}`} ref={helloRef}></div>
        </div>
        <div className={classes.RightWrapper}></div>
      </div>
    </div>
  );
};

export default Section1;
