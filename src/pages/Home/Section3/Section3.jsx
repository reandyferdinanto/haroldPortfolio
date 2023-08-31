import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import PhotoCameraTwoToneIcon from '@mui/icons-material/PhotoCameraTwoTone';
import AudiotrackTwoToneIcon from '@mui/icons-material/AudiotrackTwoTone';
import HistoryEduTwoToneIcon from '@mui/icons-material/HistoryEduTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import { lime } from '@mui/material/colors';
import classes from './style.module.scss';

const Section3 = () => {
  return (
    <div>
      <div className={classes.Section3Wrapper}>
        <div className={classes.S3Title}>EXPERIENCE</div>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
              2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <PhotoCameraTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '0.5rem', px: 2 }}>
              <Typography variant="h6" component="span">
                Student Association
              </Typography>
              <Typography>Head Documentation on Cravier 2019</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
              2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <PhotoCameraTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Student Association
              </Typography>
              <Typography>Head Documentation Plaza Desain Fantasme</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
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
              <Typography variant="h6" component="span">
                Student Activity Unit
              </Typography>
              <Typography>Regional Head UKM "Bersama Dalam Musik" - Kemanggisan</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
              2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="secondary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <AudiotrackTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Student Activity Unit
              </Typography>
              <Typography>Deputi Coordinator Documentation Plaza Desain Emotia</Typography>
            </TimelineContent>
          </TimelineItem>
          <div className={classes.S3Title2}>EDUCATION</div>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
              2017 - 2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <HistoryEduTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '1rem', px: 2 }}>
              <Typography variant="h6" component="span">
                SMA Labschool Cibubur
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
              2020 - present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined" sx={{ borderColor: 'orange' }}>
                <SchoolTwoToneIcon sx={{ color: lime[500] }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Binus University
              </Typography>
              <Typography>Visual Communication Design, New Media</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Section3;