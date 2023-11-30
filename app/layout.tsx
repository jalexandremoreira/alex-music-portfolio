'use client';
import Stack from '@mui/material/Stack';
import { Sintony } from 'next/font/google';
import { usePathname } from 'next/navigation';

import './globals.css';
import NavbarDesktop from '@/components/navbar/NavbarDesktop';
import ThemeRegistry from '@/theme/ThemeRegistry';
import useAppDimensions from '@/hooks/useAppDimensions';

export const sintony = Sintony({
  subsets: ['latin-ext'],
  variable: '--font-sintony',
  weight: ['400', '700'],
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
      <body className={sintony.className}>
        <ThemeRegistry options={{ key: 'css' }}>
          <Stack
            // className={
            //   isMobile ? 'layout-container-mobile' : 'layout-container-desktop'
            // }
            direction="column"
            display="flex"
            flexGrow={1}
            justifyContent="flex-start"
            // maxWidth={isMobile ? '100vw' : maxWidthDesktop}
            bgcolor={pathname === '/' ? 'primary.main' : 'white.main'}
            width="100%"
            sx={{
              overflowY: 'auto',
            }}
          >
            {pathname !== '/' && <NavbarDesktop />}

            {children && children}
          </Stack>
        </ThemeRegistry>
      </body>
    </html>
  );
}
