import React from 'react';
import classes from './style.module.scss';

const Section1 = () => {
  return (
    <div>
      <div className={classes.Section1Wrapper}>
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
    </div>
  );
};

export default Section1;
