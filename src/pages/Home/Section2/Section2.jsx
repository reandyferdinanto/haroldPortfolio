import React, { useState, useEffect, useRef } from 'react';
import classes from './style.module.scss';

const Section2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className={classes.WrapperSection2} ref={sectionRef}>
        <div className={classes.ContainerLeft}>
          <div className={`${classes.CardAboutMe} ${isVisible ? classes.fadeIn : ''}`}>
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
          <div className={`${classes.ProfilePic} ${isVisible ? classes.fadeIn : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
