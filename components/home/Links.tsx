import React from 'react';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import useAppDimensions from '@/hooks/useAppDimensions';

import {
  AppleMusic,
  Bandcamp,
  Instagram,
  Spotify,
  Youtube,
} from '@/components/Icons';

export default function Links({
  color,
  hoverColor,
  spaceBetween,
}: {
  color: string;
  hoverColor: string;
  spaceBetween?: boolean;
}) {
  const [colors, setColors] = React.useState<string[] | null>(null);

  const { isMobile } = useAppDimensions();

  React.useEffect(() => {
    setColors([...Array(5)].map(() => color));
  }, [color]);

  const handleColorEnter = (index: number) => {
    if (colors) {
      const newColors = [...colors];
      newColors[index] = hoverColor;

      setColors(newColors);
    }
  };

  const handleColorLeave = (index: number) => {
    if (colors) {
      const newColors = [...colors];
      newColors[index] = color;

      setColors(newColors);
    }
  };

  const iconSize = isMobile ? 35 : 55;

  if (colors)
    return (
      <Stack
        direction="row"
        gap={3}
        justifyContent={spaceBetween ? 'space-between' : 'flex-start'}
      >
        {[
          {
            icon: <Instagram size={iconSize} color={colors[0]} />,
            link: 'https://www.instagram.com/jalexandremoreira/',
          },
          {
            icon: <AppleMusic size={iconSize} color={colors[1]} />,
            link: 'https://music.apple.com/se/artist/alexandre-moreira/1519329052?l=en-GB',
          },
          {
            icon: <Bandcamp size={iconSize} color={colors[2]} />,
            link: 'https://alexandremoreira.bandcamp.com/',
          },
          {
            icon: <Spotify size={iconSize} color={colors[3]} />,
            link: 'https://open.spotify.com/artist/4BCSGv1BbuWdsqUd22jRZQ',
          },
          {
            icon: <Youtube size={iconSize} color={colors[4]} />,
            link: 'https://www.youtube.com/@alexandremoreira1357',
          },
        ].map(({ icon, link }, index) => (
          <Link
            href={link}
            key={index}
            onMouseEnter={() => handleColorEnter(index)}
            onMouseLeave={() => handleColorLeave(index)}
            target="_blank"
          >
            {icon}
          </Link>
        ))}
      </Stack>
    );
}
