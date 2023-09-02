import React, { useState, useEffect, useRef } from 'react';
import classes from './style.module.scss';
import anime from 'animejs';

const Section2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const helloRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
            anime({
              targets: '.Card-About-Me',
              translateX: [-150, 0],
              opacity: [0, 1],
              duration: 1500,
              easing: 'easeInOutSine',
            });

            anime({
              targets: '.Profile-Pic',
              translateX: [150, 0],
              opacity: [0, 1],
              duration: 1500,
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
    <div>
      <div className={classes.WrapperSection2} ref={sectionRef}>
        <div className={classes.ContainerLeft}>
          <div className={`Card-About-Me ${classes.CardAboutMe}`} ref={helloRef}>
            <div className={classes.CardTitle}>About Me</div>
            <div className={classes.CardDesc1}>Graphic Designer with 2 years of experience in the industry.</div>
            <div className={classes.CardDesc2}>
              My work has spanned to 3D artist, Video Editing, and Videography. My passion is to make things better
              efficiently and as fast as possible with little mistakes.
            </div>
            <div className={classes.CardDesc3}>Born on 19th August 2002 </div>
          </div>
        </div>
        <div className={classes.ContainerRight}>
          <div className={`Profile-Pic ${classes.ProfilePic}`} ref={helloRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
