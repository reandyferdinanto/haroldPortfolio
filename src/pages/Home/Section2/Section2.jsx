import React from 'react';
import classes from './style.module.scss';

const Section2 = () => {
  return (
    <div>
      <div className={classes.WrapperSection2}>
        <div className={classes.ContainerLeft}>
          <div className={classes.CardAboutMe}>
            <div className={classes.CardTitle}>About Me</div>
            <div className={classes.CardDesc1}>Graphic Designer with 2 years of experience in the industry.</div>
            <div className={classes.CardDesc2}>
              My work has spanned to 3D artist, Video Editing, and Videography. My passion is to make thisngs better
              efficiently and as fast as possible with little mistake.
            </div>
            <div className={classes.CardDesc3}>Born on 19th August 2002 </div>
          </div>
        </div>
        <div className={classes.ContainerRight}>
          <div className={classes.ProfilePic}></div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
