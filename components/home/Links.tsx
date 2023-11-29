import React from 'react';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import {
  Bandcamp,
  Instagram,
  Spotify,
  Tiktok,
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

  if (colors)
    return (
      <Stack
        direction="row"
        gap={3}
        justifyContent={spaceBetween ? 'space-between' : 'flex-start'}
      >
        {[
          {
            icon: <Instagram size={55} color={colors[0]} />,
            link: '#',
          },
          {
            icon: <Tiktok size={55} color={colors[1]} />,
            link: '#',
          },
          {
            icon: <Bandcamp size={55} color={colors[2]} />,
            link: '#',
          },
          {
            icon: <Spotify size={55} color={colors[3]} />,
            link: '#',
          },
          {
            icon: <Youtube size={55} color={colors[4]} />,
            link: '#',
          },
        ].map(({ icon, link }, index) => (
          <Link
            href={link}
            key={index}
            onMouseEnter={() => handleColorEnter(index)}
            onMouseLeave={() => handleColorLeave(index)}
          >
            {icon}
          </Link>
        ))}
      </Stack>
    );
}
