import React from 'react';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import { AppleMusic, Bandcamp, Spotify } from '@/components/Icons';
import { Links } from '@/services/musicList';
import theme from '@/theme';

export default function Links({
  spotify,
  appleMusic,
  bandCamp,
}: Omit<Links, 'coverArt'>) {
  const [colors, setColors] = React.useState<string[] | null>(null);
  const { palette } = theme;

  const iconDetails = {
    color: palette.white[200],
    hoverColor: palette.white.main,
    size: 60,
  };

  React.useEffect(() => {
    setColors([...Array(3)].map(() => iconDetails.color));
  }, []);

  const handleColorEnter = (index: number) => {
    if (colors) {
      const newColors = [...colors];
      newColors[index] = iconDetails.hoverColor;

      setColors(newColors);
    }
  };

  const handleColorLeave = (index: number) => {
    if (colors) {
      const newColors = [...colors];
      newColors[index] = iconDetails.color;

      setColors(newColors);
    }
  };

  if (colors)
    return (
      <Stack direction="row" gap={4} overflow="auto">
        {spotify && (
          <Link
            href={spotify}
            onMouseEnter={() => handleColorEnter(0)}
            onMouseLeave={() => handleColorLeave(0)}
            target="_blank"
          >
            <Spotify color={colors[0]} size={iconDetails.size} />
          </Link>
        )}

        {appleMusic && (
          <Link
            href={appleMusic}
            onMouseEnter={() => handleColorEnter(1)}
            onMouseLeave={() => handleColorLeave(1)}
            target="_blank"
          >
            <AppleMusic color={colors[1]} size={iconDetails.size} />
          </Link>
        )}

        {bandCamp && (
          <Link
            href={bandCamp}
            onMouseEnter={() => handleColorEnter(2)}
            onMouseLeave={() => handleColorLeave(2)}
            target="_blank"
          >
            <Bandcamp color={colors[2]} size={iconDetails.size} />
          </Link>
        )}
      </Stack>
    );
}
