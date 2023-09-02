import React, { useState, useEffect, useRef } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import PhotoCameraTwoToneIcon from '@mui/icons-material/PhotoCameraTwoTone';
import AudiotrackTwoToneIcon from '@mui/icons-material/AudiotrackTwoTone';
import HistoryEduTwoToneIcon from '@mui/icons-material/HistoryEduTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { lime } from '@mui/material/colors';
import classes from './style.module.scss';
import anime from 'animejs';

const Section3 = ({ isVisible, updateVisibility }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateVisibility(true);

            anime({
              targets: '.timeline-right',
              translateX: [250, 0],
              opacity: [0, 1],
              duration: 1500,
              easing: 'easeInOutSine',
              delay: anime.stagger(100),
            });

            anime({
              targets: '.timeline-left',
              translateX: [-250, 0],
              opacity: [0, 1],
              duration: 1500,
              easing: 'easeInOutSine',
              delay: anime.stagger(100),
            });
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
    <div>
      <div className={classes.Section3Wrapper} ref={sectionRef}>
        <div className={classes.S3Title}>EXPERIENCE</div>
        <Timeline position="alternate">
          <TimelineItem className="timeline-right">
            <TimelineOppositeContent
              className={classes.font}
              sx={{ m: 'auto 0', fontWeight: 800 }}
              variant="body2"
              color="text.secondary"
            >
              2023 - present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <PhotoCameraTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography className={classes.font} sx={{ fontSize: '1.2rem', fontWeight: 800 }} component="span">
                Festivo - PT. Semesta Realitas Indonesia
              </Typography>
              <Typography className={classes.font} sx={{ fontSize: '1rem', fontWeight: 400 }}>
                3D Artist - Part Time
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="timeline-left">
            <TimelineOppositeContent
              className={classes.font}
              sx={{ m: 'auto 0', fontWeight: 800 }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <PhotoCameraTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '0.5rem', px: 2 }}>
              <Typography className={classes.font} sx={{ fontSize: '1.2rem', fontWeight: 800 }} component="span">
                Festivo - PT. Semesta Realitas Indonesia
              </Typography>
              <Typography className={classes.font} sx={{ fontSize: '1rem', fontWeight: 400 }}>
                3D Artist - Internship
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="timeline-right">
            <TimelineOppositeContent
              className={classes.font}
              sx={{ m: 'auto 0', fontWeight: 800 }}
              variant="body2"
              color="text.secondary"
            >
              2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <PhotoCameraTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography className={classes.font} sx={{ fontSize: '1.2rem', fontWeight: 800 }} component="span">
                Student Activity Unit
              </Typography>
              <Typography className={classes.font} sx={{ fontSize: '1rem', fontWeight: 400 }}>
                Deputi Coordinator Plaza Desain Emotia
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="timeline-left">
            <TimelineOppositeContent
              className={classes.font}
              sx={{ m: 'auto 0', fontWeight: 800 }}
              variant="body2"
              color="text.secondary"
            >
              2021 - 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <AudiotrackTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography className={classes.font} sx={{ fontSize: '1.2rem', fontWeight: 800 }} component="span">
                Student Activity Unit
              </Typography>
              <Typography className={classes.font} sx={{ fontSize: '1rem', fontWeight: 400 }}>
                Regional Head UKM "Bersama Dalam Musik" - Kemanggisan
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="timeline-right">
            <TimelineOppositeContent
              className={classes.font}
              sx={{ m: 'auto 0', fontWeight: 800 }}
              variant="body2"
              color="text.secondary"
            >
              2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="secondary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <AudiotrackTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography className={classes.font} sx={{ fontSize: '1.2rem', fontWeight: 800 }} component="span">
                Student Association
              </Typography>
              <Typography className={classes.font} sx={{ fontSize: '1rem', fontWeight: 400 }}>
                Head Documentation Plaza Desain Fantasme
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="timeline-left">
            <TimelineOppositeContent
              className={classes.font}
              sx={{ m: 'auto 0', fontWeight: 800 }}
              variant="body2"
              color="text.secondary"
            >
              2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <AudiotrackTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography className={classes.font} sx={{ fontSize: '1.2rem', fontWeight: 800 }} component="span">
                Student Association
              </Typography>
              <Typography className={classes.font} sx={{ fontSize: '1rem', fontWeight: 400 }}>
                Head Documentation on Cravier
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <div className={classes.S3Title2}>EDUCATION</div>
          <TimelineItem className="timeline-right">
            <TimelineOppositeContent
              className={classes.font}
              sx={{ m: 'auto 0', fontWeight: 800 }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              2020 - present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <HistoryEduTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '1rem', px: 2 }}>
              <Typography className={classes.font} sx={{ fontSize: '1.2rem', fontWeight: 800 }} component="span">
                Binus University
              </Typography>
              <Typography className={classes.font} sx={{ fontSize: '1rem', fontWeight: 400 }}>
                Visual Communication Design, New Media
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="timeline-left">
            <TimelineOppositeContent
              className={classes.font}
              sx={{ m: 'auto 0', fontWeight: 800 }}
              variant="body2"
              color="text.secondary"
            >
              2017 - 2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <SchoolTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography className={classes.font} sx={{ fontSize: '1.2rem', fontWeight: 800 }} component="span">
                SMA Labschool Cibubur
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Section3;
