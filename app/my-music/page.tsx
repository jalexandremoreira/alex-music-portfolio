'use client';
import Stack from '@mui/material/Stack';

import useAppDimensions from '@/hooks/useAppDimensions';
import MusicCard from '@/components/MusicCard';

export default function MyMusicPage() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();

  return (
    <Stack
      alignItems="center"
      bgcolor="primary.700"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Stack
        height="100%"
        gap="40px"
        maxWidth={maxWidthDesktop}
        paddingX={paddingXDesktop}
        paddingTop="100px"
        width="100%"
      >
        {[
          {
            title: 'title goes here yo',
            date: 'date goes here yo',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in et viverra turpis ut sit euismod amet. Libero hendrerit feugiat amet in bibendum id eget nibh ullamcorper. Sagittis habitant neque consectetur fermentum tristique ac eu lacus. In tellus lacus purus velit ut proin.',
            link: '#',
          },
          {
            title: 'title goes here yo',
            date: 'date goes here yo',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in et viverra turpis ut sit euismod amet. Libero hendrerit feugiat amet in bibendum id eget nibh ullamcorper. Sagittis habitant neque consectetur fermentum tristique ac eu lacus. In tellus lacus purus velit ut proin.',
            link: '#',
          },
        ].map(({ title, date, description }, index) => (
          <MusicCard
            key={index}
            bgcolor="primary.main"
            title={title}
            date={date}
            description={description}
          />
        ))}
      </Stack>
    </Stack>
  );
}
