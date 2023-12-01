import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface Props {
  picDimensions: {
    wD: number;
    hD: number;
  };
  alt?: string;
  marginTop?: string;
  picBorder: number;
  src: string;
  priority?: boolean;
}

export default function PictureWithBorder({
  alt,
  marginTop,
  picBorder,
  picDimensions,
  priority,
  src,
}: Props) {
  return (
    <Stack
      alignItems="flex-end"
      height={picDimensions.hD + picBorder}
      width={picDimensions.wD + picBorder}
      marginTop={marginTop ?? '0'}
    >
      <Stack
        alignItems="flex-end"
        direction="row"
        height={picDimensions.hD}
        width={picDimensions.wD + picBorder}
      >
        <Box
          borderRadius="2px 2px 0 2px"
          height={picDimensions.hD}
          width={picDimensions.wD}
          bgcolor="secondary.400"
        >
          <Box
            borderRadius="2px"
            height={picDimensions.hD}
            overflow="hidden"
            width={picDimensions.wD}
          >
            <Image
              alt={alt ?? 'Image of something'}
              height={picDimensions.hD}
              src={src}
              width={picDimensions.wD}
              loading={priority ? 'eager' : 'lazy'}
              priority={priority ?? false}
            />
          </Box>
        </Box>

        <Box
          bgcolor="secondary.400"
          borderRadius="0 2px 0 0"
          height={picDimensions.hD - picBorder}
          width={picBorder}
        />
      </Stack>

      <Box
        bgcolor="secondary.400"
        borderRadius="0 0 2px 2px"
        height={picBorder}
        width={picDimensions.wD}
      />
    </Stack>
  );
}
