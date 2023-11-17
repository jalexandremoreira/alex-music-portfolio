'use client';
import Stack from '@mui/material/Stack';
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';

import ThemeRegistry from '@/theme/ThemeRegistry';
import useAppDimensions from '@/hooks/useAppDimensions';
import './globals.css';
import NavbarDesktop from '@/components/navbar/NavbarDesktop';

const seoulHangang = localFont({
  src: './seoulHangang.ttf',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile, maxWidthDesktop, paddingXDesktop, paddingXMobile } =
    useAppDimensions();
  const pathname = usePathname();

  return (
    <html lang="en">
      <ThemeRegistry options={{ key: 'css' }}>
        <body className={seoulHangang.className}>
          <Stack
            // className={
            //   isMobile ? 'layout-container-mobile' : 'layout-container-desktop'
            // }
            direction="column"
            display="flex"
            flexGrow={1}
            justifyContent="flex-start"
            // maxWidth={isMobile ? '100vw' : maxWidthDesktop}
            width="100%"
            sx={{
              overflowY: 'auto',
            }}
          >
            {pathname !== '/' && <NavbarDesktop />}

            {children && children}
          </Stack>
        </body>
      </ThemeRegistry>
    </html>
  );
}
