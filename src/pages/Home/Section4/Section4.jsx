import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function Section4() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 75 ? 0 : prevProgress + 25));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={2} sx={{ flex: 1, width: '50rem', flexDirection: 'column', justifyContent: 'center' }}>
      <LinearProgress variant="determinate" value={25} />
      <LinearProgress variant="determinate" value={50} />
      <LinearProgress variant="determinate" value={75} />
      <LinearProgress variant="determinate" value={100} />
      <LinearProgress variant="buffer" value={progress} />
    </Stack>
  );
}
