import { Typography, TypographyProps } from '@mui/material';
import localFont from 'next/font/local';

const seoulHangang = localFont({
  src: './fonts/seoulHangang.ttf',
});

export default function Header(props: { text: string } & TypographyProps) {
  return (
    <Typography style={seoulHangang.style} {...props}>
      {props.text}
    </Typography>
  );
}
